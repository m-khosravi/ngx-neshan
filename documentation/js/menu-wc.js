'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-neshan documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxNeshanModule.html" data-type="entity-link">NgxNeshanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxNeshanModule-e389c36d9c0021bb819326dc4340b265"' : 'data-target="#xs-components-links-module-NgxNeshanModule-e389c36d9c0021bb819326dc4340b265"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxNeshanModule-e389c36d9c0021bb819326dc4340b265"' :
                                            'id="xs-components-links-module-NgxNeshanModule-e389c36d9c0021bb819326dc4340b265"' }>
                                            <li class="link">
                                                <a href="components/NeshanStaticComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NeshanStaticComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgxNeshanComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxNeshanComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/NsAddress.html" data-type="entity-link">NsAddress</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsAddressComp.html" data-type="entity-link">NsAddressComp</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsDirectionResult.html" data-type="entity-link">NsDirectionResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsDistance.html" data-type="entity-link">NsDistance</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsLeg.html" data-type="entity-link">NsLeg</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsLocation.html" data-type="entity-link">NsLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsOverviewpolyline.html" data-type="entity-link">NsOverviewpolyline</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsReverseResult.html" data-type="entity-link">NsReverseResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsRoute.html" data-type="entity-link">NsRoute</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsSearchItem.html" data-type="entity-link">NsSearchItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsSearchResult.html" data-type="entity-link">NsSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsStep.html" data-type="entity-link">NsStep</a>
                            </li>
                            <li class="link">
                                <a href="classes/NsXYLocation.html" data-type="entity-link">NsXYLocation</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NeshanService.html" data-type="entity-link">NeshanService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});