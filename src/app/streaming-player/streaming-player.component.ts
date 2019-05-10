import { Component, OnInit, ViewChild } from "@angular/core";
import { BitrateOption, VgAPI } from 'videogular2/core';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

@Component({
    selector: 'app-streaming-player',
    templateUrl: './streaming-player.component.html',
    styleUrls: ['./streaming-player.component.css']
})
export class StreamingPlayerComponent implements OnInit {
    @ViewChild(VgHLS) vgHls: VgHLS;
    api: VgAPI;
    currentStream: any = 'https://vdo.chilindo.com/hls/40-655/40-655_Wireless-N_WiFi_Repeater_Pocky_WEB_EN_24s_,240,360,480,720,960,1080,.mp4.urlset/master.m3u8';
    //currentStream: any = 'https://vdo.chilindo.com/hls/46-338/46-338_ARCTIC_AIR_EvaporativeAir-Cooler_Pocky_WEB_ENG_25s_,240,360,480,720,960,1080,.mp4.urlset/master.m3u8';
    constructor() {
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
        setTimeout(() => {
            this.api.play();
        }, 200);
    }

    ngOnInit() {
        // this.api.play();
    }

    setBitrate(option: BitrateOption) {
        this.vgHls.setBitrate(option);
    }
}