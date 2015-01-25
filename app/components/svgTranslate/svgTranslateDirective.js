angular.module('svgTranslate',[])

.directive('svgView', ['$compile','spz', function ($compile,spz) {
    return {
        restrict: 'A',
        templateUrl: function(elem, attr){
            return attr.templateUrl;
        },
        //templateUrl: 'viewBicycle/img/Bicycle_diagram-en.svg',
        link: function (scope, element, attrs) {
            var svg = element.find('svg');
            var svgEl = svg[0];

            var addKoty = function(svgEl,koty) {
                if (koty !== undefined) {
                    var drawMess = function (k) {
                        var x1 = k.x1;
                        var x2 = k.x2;
                        var y1 = k.y1;
                        var y2 = k.y2;

                        //line with arrows
                        var line = s.line(x1, y1, x2, y2);

                        var ARROW_LENGTH = 30;
                        var g = s.group(line, s.line(x1, y1, x1 - ARROW_LENGTH, y1 + ARROW_LENGTH));
                        g.add(s.line(x1, y1, x1 + ARROW_LENGTH, y1 + ARROW_LENGTH));
                        g.add(s.line(x2, y2, x2 - ARROW_LENGTH, y2 - ARROW_LENGTH));
                        g.add(s.line(x2, y2, x2 + ARROW_LENGTH, y2 - ARROW_LENGTH));



                        //add texts
                        var yMiddle = y1 + ((y2 - y1) / 2);
                        var yFirstThird = y2 - ((y2 - y1) / 3);
                        var TEXT_PADDING = 20;


                        // label
                        var matrix = new Snap.Matrix();
                        matrix.rotate(-90, x1 - TEXT_PADDING, y2 - TEXT_PADDING);
                        var label = s.text(x1 - TEXT_PADDING,y2 - TEXT_PADDING, k.label).attr({
                            id: k.label,
                            class: 'h1Label',
                            transform:matrix
                        });


                        //add text
                        var text = s.text(k.textAlign ? x1 - TEXT_PADDING : x1 + TEXT_PADDING, y2 - TEXT_PADDING,"??");
                        text.attr({
                            "ng-bind":"getMess('" + k.id + "')",
                            class:'h1Label'
                        })

                        g.attr({
                            fill: "#bada55",
                            stroke: "#000",
                            strokeWidth: 5,
                            svggroup: k.id
                        });
                        g.add(label);
                        g.add(text);

                    }

                    var s = Snap(svgEl);
                    for (var i = 0; i != koty.length; i++) {
                        drawMess(koty[i]);
                    }
                }
            }
            var  eventsHandler = {
                    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
                    , init: function(options) {
                        var instance = options.instance
                            , initialScale = 1
                            , pannedX = 0
                            , pannedY = 0

                        // Init Hammer
                        // Listen only for pointer and touch events
                        this.hammer = Hammer(options.svgElement, {
                            inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
                        })

                        // Enable pinch
                        this.hammer.get('pinch').set({enable: true})

                        // Handle double tap
                        this.hammer.on('doubletap', function(ev){
                            instance.zoomIn()
                        })

                        // Handle pan
                        this.hammer.on('pan panstart panend', function(ev){
                            // On pan start reset panned variables
                            if (ev.type === 'panstart') {
                                pannedX = 0
                                pannedY = 0
                            }

                            // Pan only the difference
                            if (ev.type === 'pan' || ev.type === 'panend') {
                                console.log('p')
                                instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
                                pannedX = ev.deltaX
                                pannedY = ev.deltaY
                            }
                        })

                        // Handle pinch
                        this.hammer.on('pinch pinchstart pinchend', function(ev){
                            // On pinch start remember initial zoom
                            if (ev.type === 'pinchstart') {
                                initialScale = instance.getZoom()
                                instance.zoom(initialScale * ev.scale)
                            }

                            // On pinch zoom
                            if (ev.type === 'pinch' || ev.type === 'pinchend') {
                                instance.zoom(initialScale * ev.scale)
                            }
                        })

                        // Prevent moving the page on some devices when panning over SVG
                        options.svgElement.addEventListener('touchmove', function(e){ e.preventDefault(); });
                    }

                    , destroy: function(){
                        this.hammer.destroy()
                    }
                }


            addKoty(svgEl,scope.$eval(attrs.svgKoty));
            svgPanZoom('#' + svgEl.id, {
                    zoomEnabled: true,
                    controlIconsEnabled: false,
                fit:1,
                center:1,
                customEventsHandler: eventsHandler
                });

                var spzTrigger = spz(svgEl);//document.getElementById("demo-tiger"));

            var groups = svg.find('g');
            angular.forEach(groups, function (path, key) {
                var currentEl = angular.element(path);
                $compile(currentEl)(scope);
            });

            var texts = svg.find('text');
            angular.forEach(texts, function (path, key) {
                    var currentEl = angular.element(path);
                    currentEl.attr("svgtext", "");
                $compile(currentEl)(scope);
            });
        }
    }
}])


.directive('svgtext', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        //scope: true,
        link: function (scope, element, attrs) {
            var elId  = element.attr("id");
            element.attr("translate", elId);

            if (elId !== undefined && elId.substr(0,5) === "frame"){
                var id = elId.substr(6);
                var bind = "result." + id[0].toUpperCase() + id.substr(1) + "| number:2";
                element.attr("ng-bind",bind);
                element.attr("class","label");
            }

            element.attr("ng-click","navigateTo('" + elId + "')");
            element.removeAttr("svgtext");
            $compile(element)(scope);
        }
    }
}])
    .directive('svggroup', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            scope:true,
            link: function (scope, element, attrs) {

                element.bind("click", function(event){
                    scope.$apply(function () {
                        var id = attrs.svggroup;
                        scope.$parent.selectCurrent(id);

                    })
                });

                element.attr("ng-class","{'selected':isSelected()}");
                scope.isSelected = function(){
                    return scope.$parent.current.id === attrs.svggroup
                }
                //scope.$watch('isSelected()',function(newValue, oldValue, scope){
                //    element.removeClass('selected');
                //    if (newValue) element.addClass('selected');
                //})
                element.removeAttr("svggroup");
                $compile(element)(scope);
            }
        }
    }])