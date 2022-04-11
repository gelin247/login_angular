import { CadastroTimes } from './cadastro-times';
import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {
    this.cadastroTimesMaps = new Map<string, number>();
  }

  ngOnInit(): void {}

  cadastroTimes = {} as CadastroTimes;
  cadastroTimesList: CadastroTimes[] = [];
  cadastroTimesMaps!: Map<string, number>;

  group: FormGroup = new FormGroup({
    nomeTime: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    numeroVotos: new FormControl(1)

  });

  saveData() {
    let xuxa = this.cadastroTimesList.find((time) => {
      if(time.nomeTime == this.group.value.nomeTime) {
        this.group.value.numeroVotos += 1;
        this.cadastroTimesList.sort(this.sortData)
        this.group.value.CadastroTimes.resetForm()
      }
    });
    if(!xuxa) {
      this.cadastroTimesList.push(this.group.value);
      this.group.value.CadastroTimes.resetForm()
    }
  }

  sortData = (a : CadastroTimes, b : CadastroTimes) => b.numeroVotos - a.numeroVotos

}
