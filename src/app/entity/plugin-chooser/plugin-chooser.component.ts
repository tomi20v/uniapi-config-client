import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPlugin} from '../../shared/interfaces';
import {DataService} from '../../core/services/data.service';

@Component({
  selector: 'plugin-chooser',
  templateUrl: './plugin-chooser.component.html',
  styleUrls: ['./plugin-chooser.component.css']
})
export class PluginChooserComponent implements OnInit {

  @Output() onAdd = new EventEmitter<string>();
  private plugins: IPlugin[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPlugins()
      .subscribe((plugins: IPlugin[]) => {
        this.plugins = plugins;
      });
  }

  clicked(pluginId: string) {
    this.onAdd.emit(pluginId);
  }

}
