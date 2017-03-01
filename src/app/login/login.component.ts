import { Component, OnInit, Inject } from '@angular/core';


//@Component是Angular提供的装饰器函数，用来描述Component的元数据
//其中selector是指这个组件在HTML模板中的标签是什么
//template是嵌入的HTML模板，如果使用单独文件可用templateUrl
//styles是嵌入的CSS样式，如果使用单独文件可以用stylesUrls
@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input type="text" name="username"
          [(ngModel)]="username"
          #usernameRef="ngModel" 
          placeholder="name"
          
          required 
          minlength="3" />

        
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>

          <input type="password" name="password"
          [(ngModel)]="password"
          #passwordRef="ngModel" 
          placeholder="password"
          required />
          <div *ngIf="passwordRef.errors?.required">this is required</div>

        
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

 

  onSubmit(formValue) {
    console.log('auth result is: ' + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
    console.log(formValue);
  }

}
