import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionBase } from "./question-base";
import { DropdownQuestion } from "./dropdown-question";
import { TextboxQuestion } from "./textbox-question";

export class QuestionControlService {
    constructor() {} 

    toFormGroup(questions: QuestionBase<any>[]) {
        let group: any = {};
        questions.forEach(question => {
            group[question.key] = question.required ? 
            new FormControl(question.value || '', Validators.required)
            : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}

export class QuestionService {
    static questions: QuestionBase<any> [] = [
        new DropdownQuestion({
            key: "brave",
            label: "Bravery Rating",
            options: [
                {key: 'solid', value: 'Solid'},
                {key: 'great', value: 'Great'},
                {key: 'good', value: 'Good'},
                {key: 'unproven', value: 'Unproven'}
            ],
            order: 2
        }),
        new TextboxQuestion({
            key: "name",
            label: "Name",
            type: "text",
            order: 1
        })        
    ];
}