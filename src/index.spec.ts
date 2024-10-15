import { getCalculator, ICalculator } from './index';

describe('Calculator', (): void => {
  let calculator: ICalculator;

  beforeEach(async (): Promise<void> => {
    const Calculator: any = await getCalculator();
    calculator = new Calculator();
  });

  it('should display `1` when pressOne() is invoked', (): void => {

    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');

  });

  it('should change to subtraction if minus pressed after plus', () : void => {

    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressMinus();
    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-2');

  });

  it('should multiply by 0 correctly', () : void => {

    calculator.pressTwo();
    calculator.pressMult();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');

  });

  // it('should multiply by a negative correctly', () : void => {

  //   calculator.pressTwo();
  //   calculator.pressMult();
  //   calculator.pressMinus();
  //   calculator.pressThree();
  //   calculator.pressEquals();
  //   const displayValue: string = calculator.display();

  //   expect(displayValue).toEqual('-6');

  // })

  it('should handle leading minus', () : void => {
    calculator.pressMinus();
    calculator.pressTwo();
    calculator.pressMult();
    calculator.pressEight();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-16');

  });

  it('should handle division by 0 correctly', () : void => {

    calculator.pressTwo();
    calculator.pressDiv();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('Infinity');

  });

  it('should handle decimal math correctly', () : void => {

    calculator.pressTwo();
    calculator.pressDot();
    calculator.pressOne();
    calculator.pressMult();
    calculator.pressEight();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('16.8');
  });

  it('should handle zero decimal math correctly', () : void => {

    calculator.pressTwo();
    calculator.pressDot();
    calculator.pressZero();
    calculator.pressMult();
    calculator.pressEight();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('16');
  });

  it('should handle operator precedence', () : void => {

    calculator.pressOne();
    calculator.pressPlus();
    calculator.pressNine();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('19');

  });

  it('should handle double digit inputs', () : void => {

    calculator.pressOne();
    calculator.pressZero();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressSeven();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('37');
  });

  // it('should handle minus minus as plus', () : void => {
  //   calculator.pressOne();
  //   calculator.pressZero();
  //   calculator.pressMinus();
  //   calculator.pressMinus();
  //   calculator.pressSeven();
  //   calculator.pressEquals();

  //   const displayValue: string = calculator.display();

  //   expect(displayValue).toEqual('17');

  // })


  it('should handle double division', () : void => {

    calculator.pressFour();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');
  });

  it('should handle division then multiplication', () : void => {

    calculator.pressFour();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4');

  });

  it('should handle zero times zero', () : void => {

    calculator.pressZero();
    calculator.pressMult();
    calculator.pressZero();

    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');

  });

  it('should handle zero minus zero', () : void => {

    calculator.pressZero();
    calculator.pressMinus();
    calculator.pressZero();

    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');

  });

  it('should use result of previous operation with other operation', () : void => {

    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressEquals();
    calculator.pressPlus();
    calculator.pressThree();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');

  })

  it('should display current operation being preformed', () : void => {

    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressTwo();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2+2');

  });

  it('should handle two negatives being multiplied', () : void => {

    calculator.pressMinus();
    calculator.pressTwo();
    calculator.pressMult();
    calculator.pressMinus();
    calculator.pressThree();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('6');

  });

  it('should handle multiple operations - division and multiplication and addition', () : void => {

    calculator.pressThree();
    calculator.pressPlus();
    calculator.pressEight();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressEquals();

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');

  });

  

});
