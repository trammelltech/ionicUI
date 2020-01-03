import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'ion-action-sheet',
    loadChildren: () => import('./ion-action-sheet/ion-action-sheet.module').then( m => m.IonActionSheetPageModule)
  },
  {
    path: 'ion-action-sheet-controller',
    loadChildren: () => import('./ion-action-sheet-controller/ion-action-sheet-controller.module').then( m => m.IonActionSheetControllerPageModule)
  },
  {
    path: 'ion-alert',
    loadChildren: () => import('./ion-alert/ion-alert.module').then( m => m.IonAlertPageModule)
  },
  {
    path: 'ion-alert-controller',
    loadChildren: () => import('./ion-alert-controller/ion-alert-controller.module').then( m => m.IonAlertControllerPageModule)
  },
  {
    path: 'ion-badge',
    loadChildren: () => import('./ion-badge/ion-badge.module').then( m => m.IonBadgePageModule)
  },
  {
    path: 'ion-button',
    loadChildren: () => import('./ion-button/ion-button.module').then( m => m.IonButtonPageModule)
  },
  {
    path: 'ion-ripple-effect',
    loadChildren: () => import('./ion-ripple-effect/ion-ripple-effect.module').then( m => m.IonRippleEffectPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-card-content',
    loadChildren: () => import('./ion-card-content/ion-card-content.module').then( m => m.IonCardContentPageModule)
  },
  {
    path: 'ion-card-header',
    loadChildren: () => import('./ion-card-header/ion-card-header.module').then( m => m.IonCardHeaderPageModule)
  },
  {
    path: 'ion-card-subtitle',
    loadChildren: () => import('./ion-card-subtitle/ion-card-subtitle.module').then( m => m.IonCardSubtitlePageModule)
  },
  {
    path: 'ion-card-title',
    loadChildren: () => import('./ion-card-title/ion-card-title.module').then( m => m.IonCardTitlePageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-app',
    loadChildren: () => import('./ion-app/ion-app.module').then( m => m.IonAppPageModule)
  },
  {
    path: 'ion-content',
    loadChildren: () => import('./ion-content/ion-content.module').then( m => m.IonContentPageModule)
  },
  {
    path: 'ion-datetime',
    loadChildren: () => import('./ion-datetime/ion-datetime.module').then( m => m.IonDatetimePageModule)
  },
  {
    path: 'ion-picker',
    loadChildren: () => import('./ion-picker/ion-picker.module').then( m => m.IonPickerPageModule)
  },
  {
    path: 'ion-picker-controller',
    loadChildren: () => import('./ion-picker-controller/ion-picker-controller.module').then( m => m.IonPickerControllerPageModule)
  },
  {
    path: 'ion-fab',
    loadChildren: () => import('./ion-fab/ion-fab.module').then( m => m.IonFabPageModule)
  },
  {
    path: 'ion-fab-button',
    loadChildren: () => import('./ion-fab-button/ion-fab-button.module').then( m => m.IonFabButtonPageModule)
  },
  {
    path: 'ion-fab-list',
    loadChildren: () => import('./ion-fab-list/ion-fab-list.module').then( m => m.IonFabListPageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'ion-col',
    loadChildren: () => import('./ion-col/ion-col.module').then( m => m.IonColPageModule)
  },
  {
    path: 'ion-row',
    loadChildren: () => import('./ion-row/ion-row.module').then( m => m.IonRowPageModule)
  },
  {
    path: 'ion-infinite-scroll',
    loadChildren: () => import('./ion-infinite-scroll/ion-infinite-scroll.module').then( m => m.IonInfiniteScrollPageModule)
  },
  {
    path: 'ion-infinite-scroll-content',
    loadChildren: () => import('./ion-infinite-scroll-content/ion-infinite-scroll-content.module').then( m => m.IonInfiniteScrollContentPageModule)
  },
  {
    path: 'ion-icon',
    loadChildren: () => import('./ion-icon/ion-icon.module').then( m => m.IonIconPageModule)
  },
  {
    path: 'ion-input',
    loadChildren: () => import('./ion-input/ion-input.module').then( m => m.IonInputPageModule)
  },
  {
    path: 'ion-textarea',
    loadChildren: () => import('./ion-textarea/ion-textarea.module').then( m => m.IonTextareaPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },
  {
    path: 'ion-item-divider',
    loadChildren: () => import('./ion-item-divider/ion-item-divider.module').then( m => m.IonItemDividerPageModule)
  },
  {
    path: 'ion-item-group',
    loadChildren: () => import('./ion-item-group/ion-item-group.module').then( m => m.IonItemGroupPageModule)
  },
  {
    path: 'ion-item-sliding',
    loadChildren: () => import('./ion-item-sliding/ion-item-sliding.module').then( m => m.IonItemSlidingPageModule)
  },
  {
    path: 'ion-item-options',
    loadChildren: () => import('./ion-item-options/ion-item-options.module').then( m => m.IonItemOptionsPageModule)
  },
  {
    path: 'ion-item-option',
    loadChildren: () => import('./ion-item-option/ion-item-option.module').then( m => m.IonItemOptionPageModule)
  },
  {
    path: 'ion-label',
    loadChildren: () => import('./ion-label/ion-label.module').then( m => m.IonLabelPageModule)
  },
  {
    path: 'ion-note',
    loadChildren: () => import('./ion-note/ion-note.module').then( m => m.IonNotePageModule)
  },
  {
    path: 'ion-list',
    loadChildren: () => import('./ion-list/ion-list.module').then( m => m.IonListPageModule)
  },
  {
    path: 'ion-list-header',
    loadChildren: () => import('./ion-list-header/ion-list-header.module').then( m => m.IonListHeaderPageModule)
  },
  {
    path: 'ion-virtual-scroll',
    loadChildren: () => import('./ion-virtual-scroll/ion-virtual-scroll.module').then( m => m.IonVirtualScrollPageModule)
  },
  {
    path: 'ion-avatar',
    loadChildren: () => import('./ion-avatar/ion-avatar.module').then( m => m.IonAvatarPageModule)
  },
  {
    path: 'ionicon',
    loadChildren: () => import('./ionicon/ionicon.module').then( m => m.IoniconPageModule)
  },
  {
    path: 'ionimg',
    loadChildren: () => import('./ionimg/ionimg.module').then( m => m.IonimgPageModule)
  },
  {
    path: 'ion-thumbnail',
    loadChildren: () => import('./ion-thumbnail/ion-thumbnail.module').then( m => m.IonThumbnailPageModule)
  },
  {
    path: 'ion-menu',
    loadChildren: () => import('./ion-menu/ion-menu.module').then( m => m.IonMenuPageModule)
  },
  {
    path: 'ion-menu-button',
    loadChildren: () => import('./ion-menu-button/ion-menu-button.module').then( m => m.IonMenuButtonPageModule)
  },
  {
    path: 'ion-menu-controller',
    loadChildren: () => import('./ion-menu-controller/ion-menu-controller.module').then( m => m.IonMenuControllerPageModule)
  },
  {
    path: 'ion-menu-toggle',
    loadChildren: () => import('./ion-menu-toggle/ion-menu-toggle.module').then( m => m.IonMenuTogglePageModule)
  },
  {
    path: 'ion-split-pane',
    loadChildren: () => import('./ion-split-pane/ion-split-pane.module').then( m => m.IonSplitPanePageModule)
  },
  {
    path: 'ion-modal',
    loadChildren: () => import('./ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  },
  {
    path: 'ion-modal-controller',
    loadChildren: () => import('./ion-modal-controller/ion-modal-controller.module').then( m => m.IonModalControllerPageModule)
  },
  {
    path: 'ion-backdrop',
    loadChildren: () => import('./ion-backdrop/ion-backdrop.module').then( m => m.IonBackdropPageModule)
  },
  {
    path: 'ion-nav',
    loadChildren: () => import('./ion-nav/ion-nav.module').then( m => m.IonNavPageModule)
  },
  {
    path: 'ion-nav-pop',
    loadChildren: () => import('./ion-nav-pop/ion-nav-pop.module').then( m => m.IonNavPopPageModule)
  },
  {
    path: 'ion-nav-push',
    loadChildren: () => import('./ion-nav-push/ion-nav-push.module').then( m => m.IonNavPushPageModule)
  },
  {
    path: 'ion-nav-set-root',
    loadChildren: () => import('./ion-nav-set-root/ion-nav-set-root.module').then( m => m.IonNavSetRootPageModule)
  },
  {
    path: 'ion-popover',
    loadChildren: () => import('./ion-popover/ion-popover.module').then( m => m.IonPopoverPageModule)
  },
  {
    path: 'ion-popover-controller',
    loadChildren: () => import('./ion-popover-controller/ion-popover-controller.module').then( m => m.IonPopoverControllerPageModule)
  },
  {
    path: 'ion-loading',
    loadChildren: () => import('./ion-loading/ion-loading.module').then( m => m.IonLoadingPageModule)
  },
  {
    path: 'ion-loading-controller',
    loadChildren: () => import('./ion-loading-controller/ion-loading-controller.module').then( m => m.IonLoadingControllerPageModule)
  },
  {
    path: 'ion-progress-bar',
    loadChildren: () => import('./ion-progress-bar/ion-progress-bar.module').then( m => m.IonProgressBarPageModule)
  },
  {
    path: 'ion-skeleton-text',
    loadChildren: () => import('./ion-skeleton-text/ion-skeleton-text.module').then( m => m.IonSkeletonTextPageModule)
  },
  {
    path: 'ion-spinner',
    loadChildren: () => import('./ion-spinner/ion-spinner.module').then( m => m.IonSpinnerPageModule)
  },
  {
    path: 'ion-radio',
    loadChildren: () => import('./ion-radio/ion-radio.module').then( m => m.IonRadioPageModule)
  },
  {
    path: 'ion-radio-group',
    loadChildren: () => import('./ion-radio-group/ion-radio-group.module').then( m => m.IonRadioGroupPageModule)
  },
  {
    path: 'ion-range',
    loadChildren: () => import('./ion-range/ion-range.module').then( m => m.IonRangePageModule)
  },
  {
    path: 'ion-refresher',
    loadChildren: () => import('./ion-refresher/ion-refresher.module').then( m => m.IonRefresherPageModule)
  },
  {
    path: 'ion-refresher-content',
    loadChildren: () => import('./ion-refresher-content/ion-refresher-content.module').then( m => m.IonRefresherContentPageModule)
  },
  {
    path: 'ion-reorder',
    loadChildren: () => import('./ion-reorder/ion-reorder.module').then( m => m.IonReorderPageModule)
  },
  {
    path: 'ion-reorder-group',
    loadChildren: () => import('./ion-reorder-group/ion-reorder-group.module').then( m => m.IonReorderGroupPageModule)
  },
  {
    path: 'ion-router',
    loadChildren: () => import('./ion-router/ion-router.module').then( m => m.IonRouterPageModule)
  },
  {
    path: 'ion-router-link',
    loadChildren: () => import('./ion-router-link/ion-router-link.module').then( m => m.IonRouterLinkPageModule)
  },
  {
    path: 'ion-router-outlet',
    loadChildren: () => import('./ion-router-outlet/ion-router-outlet.module').then( m => m.IonRouterOutletPageModule)
  },
  {
    path: 'ion-route',
    loadChildren: () => import('./ion-route/ion-route.module').then( m => m.IonRoutePageModule)
  },
  {
    path: 'ion-route-redirect',
    loadChildren: () => import('./ion-route-redirect/ion-route-redirect.module').then( m => m.IonRouteRedirectPageModule)
  },
  {
    path: 'ion-searchbar',
    loadChildren: () => import('./ion-searchbar/ion-searchbar.module').then( m => m.IonSearchbarPageModule)
  },
  {
    path: 'ion-segment',
    loadChildren: () => import('./ion-segment/ion-segment.module').then( m => m.IonSegmentPageModule)
  },
  {
    path: 'ion-segment-button',
    loadChildren: () => import('./ion-segment-button/ion-segment-button.module').then( m => m.IonSegmentButtonPageModule)
  },
  {
    path: 'ion-select',
    loadChildren: () => import('./ion-select/ion-select.module').then( m => m.IonSelectPageModule)
  },
  {
    path: 'ion-select-option',
    loadChildren: () => import('./ion-select-option/ion-select-option.module').then( m => m.IonSelectOptionPageModule)
  },
  {
    path: 'ion-slides',
    loadChildren: () => import('./ion-slides/ion-slides.module').then( m => m.IonSlidesPageModule)
  },
  {
    path: 'ion-slide',
    loadChildren: () => import('./ion-slide/ion-slide.module').then( m => m.IonSlidePageModule)
  },
  {
    path: 'ion-tabs',
    loadChildren: () => import('./ion-tabs/ion-tabs.module').then( m => m.IonTabsPageModule)
  },
  {
    path: 'ion-tab',
    loadChildren: () => import('./ion-tab/ion-tab.module').then( m => m.IonTabPageModule)
  },
  {
    path: 'ion-tab-bar',
    loadChildren: () => import('./ion-tab-bar/ion-tab-bar.module').then( m => m.IonTabBarPageModule)
  },
  {
    path: 'ion-tab-button',
    loadChildren: () => import('./ion-tab-button/ion-tab-button.module').then( m => m.IonTabButtonPageModule)
  },
  {
    path: 'ion-toast',
    loadChildren: () => import('./ion-toast/ion-toast.module').then( m => m.IonToastPageModule)
  },
  {
    path: 'ion-toast-controller',
    loadChildren: () => import('./ion-toast-controller/ion-toast-controller.module').then( m => m.IonToastControllerPageModule)
  },
  {
    path: 'ion-toggle',
    loadChildren: () => import('./ion-toggle/ion-toggle.module').then( m => m.IonTogglePageModule)
  },
  {
    path: 'ion-toolbar',
    loadChildren: () => import('./ion-toolbar/ion-toolbar.module').then( m => m.IonToolbarPageModule)
  },
  {
    path: 'ion-header',
    loadChildren: () => import('./ion-header/ion-header.module').then( m => m.IonHeaderPageModule)
  },
  {
    path: 'ion-footer',
    loadChildren: () => import('./ion-footer/ion-footer.module').then( m => m.IonFooterPageModule)
  },
  {
    path: 'ion-title',
    loadChildren: () => import('./ion-title/ion-title.module').then( m => m.IonTitlePageModule)
  },
  {
    path: 'ion-buttons',
    loadChildren: () => import('./ion-buttons/ion-buttons.module').then( m => m.IonButtonsPageModule)
  },
  {
    path: 'ion-back-button',
    loadChildren: () => import('./ion-back-button/ion-back-button.module').then( m => m.IonBackButtonPageModule)
  },
  {
    path: 'ion-anchor',
    loadChildren: () => import('./ion-anchor/ion-anchor.module').then( m => m.IonAnchorPageModule)
  },
  {
    path: 'ion-text',
    loadChildren: () => import('./ion-text/ion-text.module').then( m => m.IonTextPageModule)
  },
  {
    path: 'api-index',
    loadChildren: () => import('./api-index/api-index.module').then( m => m.ApiIndexPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
