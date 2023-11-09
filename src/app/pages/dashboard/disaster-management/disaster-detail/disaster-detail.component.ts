import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Map, marker, icon, Icon, Control, DomUtil, ZoomAnimEvent, Layer, MapOptions, tileLayer, latLng } from 'leaflet';
@Component({
  selector: 'app-disaster-detail',
  templateUrl: './disaster-detail.component.html',
  styleUrls: ['./disaster-detail.component.css']
})
export class DisasterDetailComponent implements OnInit {
  @Output() map$: EventEmitter<Map> = new EventEmitter;
  @Output() zoom$: EventEmitter<number> = new EventEmitter;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 17,
    center: latLng(1.356954, 103.761592)
  };
  layers = [
    marker([1.356954, 103.761592], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: '../../../../../assets/icons/marker-icon.png',
        iconRetinaUrl: '../../../../../assets/icons/marker-icon.png',
        shadowUrl: '../../../../../assets/icons/marker-shadow.png'
      })
    })
  ];
  public map!: Map;
  public zoom: number = 16;

  constructor() { }

  ngOnInit(): void {
  }


  onMapReady(map: any) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  onMapZoomEnd(e: any) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

}
