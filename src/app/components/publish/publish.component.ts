import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  editor: any;
  _returnedURL: string;
  
  constructor() { }

  ngOnInit() {
  }

  getEditorInstance(editorInstance:any){
    console.log(editorInstance)
    let toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = editorInstance;
  }

  imageHandler() {
    const Imageinput = document.createElement('input');
    Imageinput.setAttribute('type', 'file');
    Imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    Imageinput.classList.add('ql-image');
  
    Imageinput.addEventListener('change', () =>  {
        const file = Imageinput.files[0];
        if (Imageinput.files != null && Imageinput.files[0] != null) {
          /*
          this._service.sendFileToServer(file).subscribe(res => {
            this._returnedURL = res;
            this.pushImageToEditor();
          });*/
        }
    });
    
    Imageinput.click();
  }
  
  pushImageToEditor() {
    const range = this.editor.getSelection(true);
    const index = range.index + range.length;
    this.editor.insertEmbed(range.index, 'image', this._returnedURL);
  }

}
