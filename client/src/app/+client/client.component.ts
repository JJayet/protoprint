import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    selector: 'client',
    styleUrls: ['../shared/style.css'],
    templateUrl: 'client.component.html',
    directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ClientComponent implements OnInit {
    uploader: FileUploader = new FileUploader({ url: URL });
    hasBaseDropZoneOver: boolean = false;
    hasAnotherDropZoneOver: boolean = false;

    constructor() { }

    ngOnInit() { }

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

}