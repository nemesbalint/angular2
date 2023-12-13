import { QuestionBase } from "./question-base";

export class DropdownQuestion extends QuestionBase<string>{
    override controlType: string = 'dropdown';
    options: {key: string, value: string} [] = [];
    
    constructor(options: {key?: string, label?: string, order?: number, options?: {key: string, value: string} []} = {}) {
        super({});
        this.key = options['key'] || '';
        this.label = options['label'] || '';
        this.options = options['options'] || [];
        //this.options = (options.options as []);
    }
}
