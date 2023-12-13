import { Component, OnInit } from '@angular/core';
import { QuestionControlService, QuestionService } from '../qform/question-control-service';
import { QuestionBase } from '../qform/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {

  questions!: QuestionBase<any>[];
  form!: FormGroup;

  constructor(private qcService: QuestionControlService
  ) {
    this.questions = QuestionService.questions;
  }

  ngOnInit(): void {
    this.form = this.qcService.toFormGroup(this.questions);

  }

  onSubmit() {
    console.log(this.form.value);
  }
  
}
