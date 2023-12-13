import { QuestionBase } from "./question-base";

export class TextboxQuestion extends QuestionBase<string> {
    override controlType: string = 'textbox';
    type: string;
    
    constructor(options: {key?: string, label?: string, type?: string, order?: number} = {}) {
        super({});
        this.key = options['key'] || '';
        this.label = options['label'] || '';
        this.type = options['type'] || '';
        //this.type = (options.type as string);
    }
}
