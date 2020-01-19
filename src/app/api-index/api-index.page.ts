import { Component, OnInit, ViewChild } from '@angular/core';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-api-index',
  templateUrl: './api-index.page.html',
  styleUrls: ['./api-index.page.scss'],
})
export class ApiIndexPage implements OnInit {

  @ViewChild(IonContent, { static: false }) ioncontent: IonContent;

  home: any[];
  actionSheet: any[];
  alert: any[];
  badge: any[];
  button: any[];
  card: any[];
  checkbox: any[];
  chip: any[];
  content: any[];
  date_and_time_pickers: any[];
  floating_action_button: any[];
  grid: any[];
  infinite_scroll: any[];
  icons: any[];
  input: any[];
  item: any[];
  list: any[];
  media: any[];
  menu: any[];
  modal: any[];
  navigation: any[];
  popover: any[];
  progress_indicators: any[];
  radio: any[];
  range: any[];
  refresher: any[];
  reorder: any[];
  route: any[];
  router: any[];
  searchbar: any[];
  segment: any[];
  select: any[];
  slides: any[];
  tabs: any[];
  toast: any[];
  toggle: any[];
  toolbar: any[];
  typography: any[];
  api_index: any[];

  constructor() {

    this.initializeItems();
   }

  ngOnInit() {
  }

  filterItems(event) {
//could be done better but they are static arrays, would not recommend this with non static or 2 way binding arrays
  this.initializeItems();
    const val = event.target.value;
    if (val && val.trim() != '') {
      this.home = this.home.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    if (val && val.trim() != '') {
      this.actionSheet = this.actionSheet.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    if (val && val.trim() != '') {
      this.alert = this.alert.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.badge = this.badge.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.button = this.button.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.card = this.card.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.checkbox = this.checkbox.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.chip = this.chip.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.content = this.content.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.date_and_time_pickers = this.date_and_time_pickers.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.floating_action_button = this.floating_action_button.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.grid = this.grid.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.infinite_scroll = this.infinite_scroll.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.icons = this.icons.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.input = this.input.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.item = this.item.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.list = this.list.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.media = this.media.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.menu = this.menu.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.modal = this.modal.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.navigation = this.navigation.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.popover = this.popover.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.progress_indicators = this.progress_indicators.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.radio = this.radio.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.range = this.range.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.refresher = this.refresher.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.reorder = this.reorder.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.route = this.route.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.router = this.router.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.searchbar = this.searchbar.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.segment = this.segment.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.select = this.select.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.slides = this.slides.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.tabs = this.tabs.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.toast = this.toast.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.toggle = this.toggle.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.toolbar = this.toolbar.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.typography = this.typography.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val && val.trim() != '') {
      this.api_index = this.api_index.filter((item: Arrays) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ScrollToBottom() {
    this.ioncontent.scrollToBottom(500);
}

  ScrollToTop() {
    this.ioncontent.scrollToTop(500);
}

initializeItems() {

  this.home = [
    {
      title: 'IonicUI Home',
      url: '/home',
    },
  ];

  this.actionSheet = [
    {
      title: 'ion-action-sheet',
      url: '/ion-action-sheet',
    },
    {
      title: 'ion-action-sheet-controller',
      url: '/ion-action-sheet-controller',
    },
  ];

  this.alert = [
    {
      title: 'ion-alert',
      url: '/ion-alert',
    },
    {
      title: 'ion-alert-controller',
      url: '/ion-alert-controller',
    },
  ];

  this.badge = [
    {
      title: 'ion-badge',
      url: '/ion-badge',
    },
  ];

  this.button = [
    {
      title: 'ion-button',
      url: '/ion-button',
    },
    {
      title: 'ion-ripple-effect',
      url: '/ion-ripple-effect',
    },
  ];

  this.card = [
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

  this.checkbox = [
    {
      title: 'ion-checkbox',
      url: '/ion-checkbox',
    },
  ];

  this.chip = [
    {
      title: 'ion-chip',
      url: '/ion-chip',
    },
  ];

  this.content = [
    {
      title: 'ion-app',
      url: '/ion-app',
    },
    {
      title: 'ion-content',
      url: '/ion-content',
    },
  ];

  this.date_and_time_pickers = [
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

  this.floating_action_button = [
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

  this.grid = [
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

  this.infinite_scroll = [
    {
      title: 'ion-infinite-scroll',
      url: '/ion-infinite-scroll',
    },
    {
      title: 'ion-infinite-scroll-content',
      url: '/ion-infinite-scroll-content',
    },
  ];

  this.icons = [
    {
      title: 'ion-icons',
      url: '/ionicon',
    },
  ];

  this.input = [
    {
      title: 'ion-input',
      url: '/ion-input',
    },
    {
      title: 'ion-textarea',
      url: '/ion-textarea',
    },
  ];

  this.item = [
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

  this.list = [
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

  this.media = [
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

  this.menu = [
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

  this.modal = [
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

  this.navigation = [
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

  this.popover = [
    {
      title: 'ion-popover',
      url: '/ion-popover',
    },
    {
      title: 'ion-popover-controller',
      url: '/ion-popover-controller',
    },
  ];

  this.progress_indicators = [
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

  this.radio = [
    {
      title: 'ion-radio',
      url: '/ion-radio',
    },
    {
      title: 'ion-radio-group',
      url: '/ion-radio-group',
    },
  ];

  this.range = [
    {
      title: 'ion-range',
      url: '/ion-range',
    },
  ];

  this.refresher = [
    {
      title: 'ion-refresher',
      url: '/ion-refresher',
    },
    {
      title: 'ion-refresher-content',
      url: '/ion-refresher-content',
    },
  ];

  this.reorder = [
    {
      title: 'ion-reorder',
      url: '/ion-reorder',
    },
    {
      title: 'ion-reorder-group',
      url: '/ion-reorder-group',
    },
  ];

  this.route = [
    {
      title: 'ion-route',
      url: '/ion-route',
    },
    {
      title: 'ion-route-redirect',
      url: '/ion-route-redirect',
    },
  ];

  this.router = [
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

  this.searchbar = [
    {
      title: 'ion-searchbar',
      url: '/ion-searchbar',
    },
  ];

  this.segment = [
    {
      title: 'ion-segment',
      url: '/ion-segment',
    },
    {
      title: 'ion-segment-button',
      url: '/ion-segment-button',
    },
  ];

  this.select = [
    {
      title: 'ion-select',
      url: '/ion-select',
    },
    {
      title: 'ion-select-option',
      url: '/ion-select-option',
    },
  ];

  this.slides = [
    {
      title: 'ion-slides',
      url: '/ion-slides',
    },
    {
      title: 'ion-slide',
      url: '/ion-slide',
    },
  ];

  this.tabs = [
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

  this.toast = [
    {
      title: 'ion-toast',
      url: '/ion-toast',
    },
    {
      title: 'ion-toast-controller',
      url: '/ion-toast-controller',
    },
  ];

  this.toggle = [
    {
      title: 'ion-toggle',
      url: '/ion-toggle',
    },
  ];

  this.toolbar = [
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

  this.typography = [
    {
      title: 'ion-anchor',
      url: '/ion-anchor',
    },
    {
      title: 'ion-text',
      url: '/ion-text',
    },
  ];

  this.api_index = [
    {
      title: 'API Index',
      url: '/api-index',
    },
  ];
}
}

export interface Arrays {
  title : string; 
}
