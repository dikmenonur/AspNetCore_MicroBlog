import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blogpost';
import { Observable } from 'rxjs';
import { TagModel } from 'ngx-chips/core/accessor';

@Component({
  selector: 'app-blog-post-add-edit',
  templateUrl: './blog-post-add-edit.component.html',
  styleUrls: ['./blog-post-add-edit.component.scss']
})
export class BlogPostAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formEmail: string;
  formTag: string;
  formBody: string;
  postId: number;
  errorMessage: any;
  existingBlogPost: BlogPost;

  constructor(private blogPostService: BlogPostService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formTitle = 'title';
    this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        title: ['', [Validators.required]],
        body: ['', [Validators.required]],
        email: ['', [Validators.required]],
      }
    )
  }

  ngGetId() {
    try {
      var myDate = new Date();
      var varID = myDate.getHours() + myDate.getMinutes() + myDate.getSeconds() + myDate.getMilliseconds();

      return varID;
    } catch (e) {
      console.log(e.message);
    }
  }

  ngRandomId() {
    var s = this.ngGetId();
    return s;
  }

  ngOnInit() {

    if (this.postId > 0) {
      this.actionType = 'Edit';
      this.blogPostService.getBlogPost(this.postId)
        .subscribe(data => (
          this.existingBlogPost = data,
          this.form.controls[this.formTitle].setValue(data.title),
          this.form.controls[this.formBody].setValue(data.detail),
          this.form.controls[this.formEmail].setValue(data.email),
          this.form.controls[this.formTag].setValue(data.tag)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let blogPost: BlogPost = {
        postId: this.ngRandomId(),
        dt: new Date(),
        creator: 'Onur Dikmen',
        title: this.form.get(this.formTitle).value,
        detail: this.form.get(this.formBody).value,
        email: this.form.get(this.formEmail).value,
        tag: this.form.get(this.formTag).value
      };

      this.blogPostService.saveBlogPost(blogPost)
        .subscribe((data) => {
          this.router.navigate(['/blogpost', data.postId]);
        });
    }

    if (this.actionType === 'Edit') {
      let blogPost: BlogPost = {
        postId: this.existingBlogPost.postId,
        dt: this.existingBlogPost.dt,
        creator: this.existingBlogPost.creator,
        title: this.form.get(this.formTitle).value,
        detail: this.form.get(this.formBody).value,
        email: this.form.get(this.formEmail).value,
        tag: this.form.get(this.formTag).value
      };
      this.blogPostService.updateBlogPost(blogPost.postId, blogPost)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }

    if (this.actionType === 'Delete') {
      this.blogPostService.deleteBlogPost(this.existingBlogPost.postId)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }
  public onAdding(tag: TagModel): Observable<TagModel> {
    const confirm = window.confirm('Do you really want to add this tag?');
    return Observable
      .of(tag)
      .filter(() => confirm);
  }
  public onRemoving(tag: TagModel): Observable<TagModel> {
    const confirm = window.confirm('Do you really want to remove this tag?');
    return Observable
      .of(tag)
      .filter(() => confirm);
  }
  cancel() {
    this.router.navigate(['/']);
  }

  get title() { return this.form.get(this.formTitle); }
  get body() { return this.form.get(this.formBody); }
  get email() { return this.form.get(this.formEmail); }
  get tag() { return this.form.get(this.formTag); }
}
