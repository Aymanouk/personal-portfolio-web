import {Component, OnInit} from '@angular/core';
import { HostListener } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@HostListener('window:scroll', ['$event'])
export class AppComponent implements OnInit{
  title = 'personal-portfolio';
  isScrolled = false;

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 20,
      typeColor: '#e1ad21'
    });

    writer
      .type('And I am a full stack DEVELOPER')
      .rest(500)
      .remove(21)
      .type(' creative programming INSTRUCTOR')
      .rest(500)
      .remove(32)
      .type(' youtube content CREATOR')
      .rest(500)
      .clear()
      .start();
  }

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}


