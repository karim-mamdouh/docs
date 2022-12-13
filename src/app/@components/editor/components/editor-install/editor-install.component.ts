import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-editor-install',
  templateUrl: './editor-install.component.html',
  styleUrls: ['./editor-install.component.scss'],
})
export class EditorInstallComponent implements OnInit {
  Basic = `<form [formGroup]='form'>
  <cic-editor controlName='data'></cic-editor>
 </form>`;
  scripts = `"scripts": ["...,node_modules/quill/dist/quill.js"],`;
  styles = `"styles": ["....,node_modules/quill/dist/quill.core.css", "...,node_modules/quill/dist/quill.snow.css"],`;
  constructor() {}

  ngOnInit() {}
}
