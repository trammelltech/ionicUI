import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public home = [
    {
      title: 'Default Ionic Home',
      url: '/home',
    },
  ];

  public actionSheet = [
    {
      title: 'ion-action-sheet',
      url: '/ion-action-sheet',
    },
    {
      title: 'ion-action-sheet-controller',
      url: '/ion-action-sheet-controller',
    },
  ];

  public alert = [
    {
      title: 'ion-alert',
      url: '/ion-alert',
    },
    {
      title: 'ion-alert-controller',
      url: '/ion-alert-controller',
    },
  ];

  public badge = [
    {
      title: 'ion-badge',
      url: '/ion-badge',
    },
  ];

  public button = [
    {
      title: 'ion-button',
      url: '/ion-button',
    },
    {
      title: 'ion-ripple-effect',
      url: '/ion-ripple-effect',
    },
  ];

  public card = [
    {
      title: 'ion-card',
      url: '/ion-card',
    },
    {
      title: 'ion-card-content',
      url: '/ion-card-content',
    },
    {
      title: 'ion-card-header',
      url: '/ion-card-header',
    },
    {
      title: 'ion-card-subtitle',
      url: '/ion-card-subtitle',
    },
    {
      title: 'ion-card-title',
      url: '/ion-card-title',
    },
  ];

  public checkbox = [
    {
      title: 'ion-checkbox',
      url: '/ion-checkbox',
    },
  ];

  public chip = [
    {
      title: 'ion-chip',
      url: '/ion-chip',
    },
  ];

  public content = [
    {
      title: 'ion-app',
      url: '/ion-app',
    },
    {
      title: 'ion-content',
      url: '/ion-content',
    },
  ];

  public date_and_time_pickers = [
    {
      title: 'ion-datetime',
      url: '/ion-datetime',
    },
    {
      title: 'ion-picker',
      url: '/ion-picker',
    },
    {
      title: 'ion-picker-controller',
      url: '/ion-picker-controller',
    },
  ];

  public floating_action_button = [
    {
      title: 'ion-fab',
      url: '/ion-fab',
    },
    {
      title: 'ion-fab-button',
      url: '/ion-fab-button',
    },
    {
      title: 'ion-fab-list',
      url: '/ion-fab-list',
    },
  ];

  public grid = [
    {
      title: 'ion-grid',
      url: '/ion-grid',
    },
    {
      title: 'ion-col',
      url: '/ion-col',
    },
    {
      title: 'ion-row',
      url: '/ion-row',
    },
  ];

  public infinite_scroll = [
    {
      title: 'ion-infinite-scroll',
      url: '/ion-infinite-scroll',
    },
    {
      title: 'ion-infinite-scroll-content',
      url: '/ion-infinite-scroll-content',
    },
  ];

  public icons = [
    {
      title: 'ion-icons',
      url: '/ionicon',
    },
  ];

  public input = [
    {
      title: 'ion-input',
      url: '/ion-input',
    },
    {
      title: 'ion-textarea',
      url: '/ion-textarea',
    },
  ];

  public item = [
    {
      title: 'ion-item',
      url: '/ion-item',
    },
    {
      title: 'ion-item-divider',
      url: '/ion-item-divider',
    },
    {
      title: 'ion-item-group',
      url: '/ion-item-group',
    },
    {
      title: 'ion-item-sliding',
      url: '/ion-item-sliding',
    },
    {
      title: 'ion-item-options',
      url: '/ion-item-options',
    },
    {
      title: 'ion-item-option',
      url: '/ion-item-option',
    },
    {
      title: 'ion-label',
      url: '/ion-label',
    },
    {
      title: 'ion-note',
      url: '/ion-note',
    },
  ];

  public list = [
    {
      title: 'ion-list',
      url: '/ion-list',
    },
    {
      title: 'ion-list-header',
      url: '/ion-list-header',
    },
    {
      title: 'ion-virtual-scroll',
      url: '/ion-virtual-scroll',
    },
  ];

  public media = [
    {
      title: 'ion-avatar',
      url: '/ion-avatar',
    },
    {
      title: 'ion-icon',
      url: '/ion-icon',
    },
    {
      title: 'ion-img',
      url: '/ionimg',
    },
    {
      title: 'ion-thumbnail',
      url: '/ion-thumbnail',
    },
  ];

  public menu = [
    {
      title: 'ion-menu',
      url: '/ion-menu',
    },
    {
      title: 'ion-menu-button',
      url: '/ion-menu-button',
    },
    {
      title: 'ion-menu-controller',
      url: '/ion-menu-controller',
    },
    {
      title: 'ion-menu-toggle',
      url: '/ion-menu-toggle',
    },
    {
      title: 'ion-split-pane',
      url: '/ion-split-pane',
    },
  ];

  public modal = [
    {
      title: 'ion-modal',
      url: '/ion-modal',
    },
    {
      title: 'ion-modal-controller',
      url: '/ion-modal-controller',
    },
    {
      title: 'ion-backdrop',
      url: '/ion-backdrop',
    },
  ];

  public navigation = [
    {
      title: 'ion-nav',
      url: '/ion-nav',
    },
    {
      title: 'ion-nav-pop',
      url: '/ion-nav-pop',
    },
    {
      title: 'ion-nav-push',
      url: '/ion-nav-push',
    },
    {
      title: 'ion-nav-set-root',
      url: '/ion-nav-set-root',
    },
  ];

  public popover = [
    {
      title: 'ion-popover',
      url: '/ion-popover',
    },
    {
      title: 'ion-popover-controller',
      url: '/ion-popover-controller',
    },
  ];

  public progress_indicators = [
    {
      title: 'ion-loading',
      url: '/ion-loading',
    },
    {
      title: 'ion-loading-controller',
      url: '/ion-loading-controller',
    },
    {
      title: 'ion-progress-bar',
      url: '/ion-progress-bar',
    },
    {
      title: 'ion-skeleton-text',
      url: '/ion-skeleton-text',
    },
    {
      title: 'ion-spinner',
      url: '/ion-spinner',
    },
  ];

  public radio = [
    {
      title: 'ion-radio',
      url: '/ion-radio',
    },
    {
      title: 'ion-radio-group',
      url: '/ion-radio-group',
    },
  ];

  public range = [
    {
      title: 'ion-range',
      url: '/ion-range',
    },
  ];

  public refresher = [
    {
      title: 'ion-refresher',
      url: '/ion-refresher',
    },
    {
      title: 'ion-refresher-content',
      url: '/ion-refresher-content',
    },
  ];

  public reorder = [
    {
      title: 'ion-reorder',
      url: '/ion-reorder',
    },
    {
      title: 'ion-reorder-group',
      url: '/ion-reorder-group',
    },
  ];

  public route = [
    {
      title: 'ion-route',
      url: '/ion-route',
    },
    {
      title: 'ion-route-redirect',
      url: '/ion-route-redirect',
    },
  ];

  public router = [
    {
      title: 'ion-router',
      url: '/ion-router',
    },
    {
      title: 'ion-router-link',
      url: '/ion-router-link',
    },
    {
      title: 'ion-router-outlet',
      url: '/ion-router-outlet',
    },
  ];

  public searchbar = [
    {
      title: 'ion-searchbar',
      url: '/ion-searchbar',
    },
  ];

  public segment = [
    {
      title: 'ion-segment',
      url: '/ion-segment',
    },
    {
      title: 'ion-segment-button',
      url: '/ion-segment-button',
    },
  ];

  public select = [
    {
      title: 'ion-select',
      url: '/ion-select',
    },
    {
      title: 'ion-select-option',
      url: '/ion-select-option',
    },
  ];

  public slides = [
    {
      title: 'ion-slides',
      url: '/ion-slides',
    },
    {
      title: 'ion-slide',
      url: '/ion-slide',
    },
  ];

  public tabs = [
    {
      title: 'ion-tabs',
      url: '/ion-tabs',
    },
    {
      title: 'ion-tab',
      url: '/ion-tab',
    },
    {
      title: 'ion-tab-bar',
      url: '/ion-tab-bar',
    },
    {
      title: 'ion-tab-button',
      url: '/ion-tab-button',
    },
  ];

  public toast = [
    {
      title: 'ion-toast',
      url: '/ion-toast',
    },
    {
      title: 'ion-toast-controller',
      url: '/ion-toast-controller',
    },
  ];

  public toggle = [
    {
      title: 'ion-toggle',
      url: '/ion-toggle',
    },
  ];

  public toolbar = [
    {
      title: 'ion-toolbar',
      url: '/ion-toolbar',
    },
    {
      title: 'ion-header',
      url: '/ion-header',
    },
    {
      title: 'ion-footer',
      url: '/ion-footer',
    },
    {
      title: 'ion-title',
      url: '/ion-title',
    },
    {
      title: 'ion-buttons',
      url: '/ion-buttons',
    },
    {
      title: 'ion-back-button',
      url: '/ion-back-button',
    },
  ];

  public typography = [
    {
      title: 'ion-anchor',
      url: '/ion-anchor',
    },
    {
      title: 'ion-text',
      url: '/ion-text',
    },
  ];

  public api_index = [
    {
      title: 'API Index',
      url: '/api-index',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
