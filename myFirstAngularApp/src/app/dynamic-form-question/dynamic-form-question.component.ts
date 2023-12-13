import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../qform/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question', //hogy kevesebbet kelljen írni
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.css'
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid}

  constructor() {}

  ngOnInit() {
  }

}
