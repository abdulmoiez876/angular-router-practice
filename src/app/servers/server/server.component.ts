import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string} = {
    id: 0,
    name: '',
    status: ''
  };

  constructor(private serversService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

  onReload() {
    this.router.navigate(['/servers'], {relativeTo: this.activatedRoute});
  }

}
