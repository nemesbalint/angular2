import { QuestionBase } from "./question-base";

export class DropdownQuestion extends QuestionBase<string>{
    override controlType: string = 'dropdown';
    options: {key: string, value: string} [] = [];
    
    constructor(options: {options?: []} = {}) {
        super({});
        this.options = options['options'] || [];
        //this.type = (options.type as string);
    }
}
