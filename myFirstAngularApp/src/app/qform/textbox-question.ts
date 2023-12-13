import { QuestionBase } from "./question-base";

export class TextboxQuestion extends QuestionBase<string> {
    override controlType: string = 'textbox';
    type: string;
    
    constructor(options: {type?: string} = {}) {
        super({});
        this.type = options['type'] || '';
        //this.type = (options.type as string);
    }
}
