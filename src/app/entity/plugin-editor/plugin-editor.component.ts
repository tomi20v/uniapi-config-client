import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {DataService} from '../../core/services/data.service';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';
import {IPlugin} from '../../shared/interfaces';

@Component({
  selector: 'plugin-editor',
  templateUrl: './plugin-editor.component.html',
  styleUrls: ['./plugin-editor.component.css']
})
export class PluginEditorComponent implements OnInit, OnChanges {

  @Input() pluginId: string;
  @Input() pluginConfig: string;
  @Input() pluginIndex: number;
  pluginSchema: IPlugin = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // happens on startup or on clearing, there's nothing to load
    if (!this.pluginId) {}
    // schema hasn't changed, no need to repload
    else if (!changes.pluginId && this.pluginId && this.pluginSchema) {}
    // load schema
    else {
      this.pluginSchema = null;
      this.dataService.getPlugin(this.pluginId)
        .subscribe((plugin: IPlugin) => {
          this.pluginSchema = plugin;
        });
    }
  }

}
