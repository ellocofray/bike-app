module BioMechanic
{

    enum CyclingTargetEnum {
        Turism =10, Race=20
    }

    interface IFrameMeasure {
        FigureMeasure:IBodyMeasure;
        SaddleLength:number;
        CyclingTarget:CyclingTargetEnum
        UsingMachineForMeasure:boolean
    }

    interface IBodyMeasure {
        Height:number;
        Weight:number;
        Inseam:number;
        ShouldersWidth:number;
        Torso:number;
        ArmElbowLength:number;
        FootSize:number;
        Flexibility:number;
    }

    interface IFrame
    {
        SeatTube?:number;
        SeatHeight?:number;
        Stack?:number;
        TopTupe?:number
        Reach?:number;
        FlatHandlebars?:number;
        SaddleHandlebarDrop?:number;
        SaddlePedalSeatback?:number;
    }



    export class FrameGeometryFactory{
        CreateMTB(measure:IFrameMeasure):IFrame{
            return new MTBFrameGeometry(measure);
        }
    }
    export class MTBFrameGeometry implements IFrame
    {

        constructor(public Measure:IFrameMeasure){
        }



        public get SeatTube():number{
            if (this.Measure.FigureMeasure.Inseam === undefined) return undefined;
            return this.Measure.FigureMeasure.Inseam* 0.22 * 2.54;;
        }
        public get FlatHandlebars():number{
            if (this.Measure.FigureMeasure.ArmElbowLength === undefined) return undefined;
            if (this.Measure.FigureMeasure.Flexibility === undefined) return undefined;

            return this.Measure.FigureMeasure.ArmElbowLength+5.7+(4*(this.Measure.FigureMeasure.Flexibility-5)/10)
        }
        public get SaddleHandlebarDrop():number{
            if (this.Measure.FigureMeasure.Inseam === undefined) return undefined;

            return (this.Measure.FigureMeasure.Inseam-76.5)/4+5.5;
        }

        public get SaddlePedalSeatback():number{
            if (this.Measure.FigureMeasure.Inseam === undefined) return undefined;
            return (28-this.Measure.SaddleLength)+(this.Measure.FigureMeasure.Inseam-76.5)/4+6;
        }
        public get SeatHeight():number{
            if (this.Measure.FigureMeasure.Inseam === undefined) return undefined;
            return this.Measure.FigureMeasure.Inseam * 0.889;
        }
        public get TopTube():number{
            if (this.Measure.FigureMeasure.ArmElbowLength === undefined) return undefined;
            return this.Measure.FigureMeasure.ArmElbowLength + 6.5;
        }
        //public get TopTube():number{
        //
        //    if (this.SeatTube === undefined) return undefined;
        //    if (this.SeatTube < 44) return 51.5;
        //    else if (this.SeatTube < 48.5) return 51.5;
        //    else if (this.SeatTube < 49.5) return 52;
        //    else if (this.SeatTube < 50.5) return 52.5;
        //    else if (this.SeatTube < 51.5) return 53;
        //    else if (this.SeatTube < 52.5) return 53.7;
        //    else if (this.SeatTube < 53.5) return 54.3;
        //    else if (this.SeatTube < 54.5) return 54.7;
        //    else if (this.SeatTube < 55.5) return 55;
        //    else if (this.SeatTube < 56.5) return 56;
        //    else if (this.SeatTube < 57.5) return 56.5;
        //    else if (this.SeatTube < 58.5) return 57;
        //    else if (this.SeatTube < 59.5) return 57.5;
        //
        //    else if (this.SeatTube < 60.5) return 58;
        //    else if (this.SeatTube < 61.5) return 58.5;
        //    else return 59;
        //}
        public get Reach():number{


            if (this.Measure.FigureMeasure.Height === undefined) return undefined;
            if (this.Measure.FigureMeasure.Torso === undefined) return undefined;
            if (this.Measure.FigureMeasure.Weight === undefined) return undefined;
            if (this.SeatTube === undefined) return undefined;


            var kuh = this.Measure.FigureMeasure.Height * 0.23;					// Kopf, Hals und Schambereich (23%)
            var bodyindex = this.Measure.FigureMeasure.Height - (kuh + this.Measure.FigureMeasure.Inseam);

            var bodycustom = (this.Measure.FigureMeasure.Torso*70 + bodyindex*30)/100;
            var elvl = (this.Measure.FigureMeasure.ArmElbowLength + bodycustom)/0.1885

            var vlpre = (elvl-10*this.TopTube)+((this.SeatTube/10*17)+(this.Measure.FigureMeasure.Torso*3.1))/2;  // Abweichung zu Version 1.2


            if (vlpre<65)return undefined;
            else if (vlpre<74.5) return 7;
            else if (vlpre<84.5) return 8;
            else if (vlpre<94.5) return 9;
            else if (vlpre<102.5) return 10;
            else if (vlpre<107.5) return 10.5;
            else if (vlpre<112.5) return 11;
            else if (vlpre<117.5) return 11.5;
            else if (vlpre<124.5) return 12;
            else if (vlpre<134.5) return 13;

            else if (vlpre<144.5) return 14;
            else return undefined;
        }

    }

}