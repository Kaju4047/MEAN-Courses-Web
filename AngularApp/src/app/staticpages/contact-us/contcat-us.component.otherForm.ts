<section class="cmspage mtb-40">
    <div class="container">
      <div class="page-desc">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h1>Contact Us</h1>
            <!-- <form [formGroup]="formdata" (ngSubmit) = "onClickSubmit(formdata.value)" > -->
              <form [formGroup]="myform" (ngSubmit)="onSubmit()">
            <!-- <form #myform = "ngForm" (ngSubmit) = "onSubmit(myform)" > -->
              <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Name" ngModel>
              </div>
              <div class="form-group">
                <input type="text" name="email" class="form-control" placeholder="E-Mail" ngModel>
              </div>
              <div class="form-group">
                <input type="text" name="phone" class="form-control" placeholder="Phone" ngModel>
              </div>
              <div class="form-group">
                <textarea name="message" rows="5" class="form-control" placeholder="Message" ngModel></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-success">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li *ngFor = " let cntct of ContactDetail">
        is {{cntct._id}} , name is: {{cntct.name}}
      </li>
    </ul>
</section>