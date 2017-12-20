import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import {IEntity} from '../shared/interfaces';
import {TrackByService} from '../core/services/trackby.service';

@Component({
  selector: 'cm-entities-card',
  templateUrl: './entities-card.component.html',
  styleUrls: ['./entities-card.component.css']
  // ,changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesCardComponent implements OnInit {

  @Input() entities: IEntity[] = [];

  constructor(public trackByService: TrackByService) { }

  ngOnInit() {
  }

}
