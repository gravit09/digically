import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="header-nav nav-innerpage-style main-menu ">
        <nav className="posr">
          <div className="container-fluid posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto pe-0">
                <div className="d-flex align-items-center">
                  <Link to="/" className="header-logo bdrr1 pr30 pr5-xl">
                    <h2>Digically</h2>
                  </Link>
                  <div className="home1_style">
                    <div id="mega-menu">
                      <a className="btn-mega fw500" href="#">
                        <span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu" />
                        Categories
                      </a>
                      <ul className="menu ps-0">
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-developer" />
                            <span className="menu-title">
                              Development &amp; IT
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-web-design-1" />
                            <span className="menu-title">
                              Design &amp; Creative
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-digital-marketing" />
                            <span className="menu-title">
                              Digital Marketing
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-translator" />
                            <span className="menu-title">
                              Writing &amp; Translation
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-microphone" />
                            <span className="menu-title">
                              Music &amp; Audio
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-video-file" />
                            <span className="menu-title">
                              Video &amp; Animation
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-ruler" />
                            <span className="menu-title">
                              Engineering &amp; Architecture
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-goal" />
                            <span className="menu-title">
                              Finance &amp; Accounting
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <ul
                    id="respMenu"
                    className="ace-responsive-menu"
                    data-menu-style="horizontal"
                  >
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Home</span>
                      </a>
                      <ul>
                        <li>
                          <a href="index.html">Home V1</a>
                        </li>
                        <li>
                          <a href="index2.html">Home V2</a>
                        </li>
                        <li>
                          <a href="index3.html">Home V3</a>
                        </li>
                        <li>
                          <a href="index4.html">Home V4</a>
                        </li>
                      </ul>
                    </li>
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Browse Jobs</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span className="title">Services</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-service-v1.html">Service v1</a>
                            </li>
                            <li>
                              <a href="page-service-v2.html">Service v2</a>
                            </li>
                            <li>
                              <a href="page-service-v3.html">Service v3</a>
                            </li>
                            <li>
                              <a href="page-service-v4.html">Service v4</a>
                            </li>
                            <li>
                              <a href="page-service-v5.html">Service v5</a>
                            </li>
                            <li>
                              <a href="page-service-v6.html">Service v6</a>
                            </li>
                            <li>
                              <a href="page-service-v7.html">Service v7</a>
                            </li>
                            <li>
                              <a href="page-service-all.html">Service All</a>
                            </li>
                            <li>
                              <a href="page-service-single.html">
                                Service Single
                              </a>
                            </li>
                            <li>
                              <a href="page-service-single-v1.html">
                                Single V1
                              </a>
                            </li>
                            <li>
                              <a href="page-service-single-v2.html">
                                Single V2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Projects</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-project-v1.html">Project v1</a>
                            </li>
                            <li>
                              <a href="page-project-list-v1.html">List v1</a>
                            </li>
                            <li>
                              <a href="page-project-list-v2.html">List v2</a>
                            </li>
                            <li>
                              <a href="page-project-list-v3.html">List v3</a>
                            </li>
                            <li>
                              <a href="page-project-single.html">
                                Project Single
                              </a>
                            </li>
                            <li>
                              <a href="page-project-single-v1.html">
                                Single V1
                              </a>
                            </li>
                            <li>
                              <a href="page-project-single-v2.html">
                                Single V2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Job View</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-job-list-v1.html">Job list v1</a>
                            </li>
                            <li>
                              <a href="page-job-list-v2.html">Job list v2</a>
                            </li>
                            <li>
                              <a href="page-job-list-v3.html">Job list V3</a>
                            </li>
                            <li>
                              <a href="page-job-list-single.html">Job Single</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Users</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span className="title">Dashboard</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="page-dashboard-proposal.html">
                                Proposal
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-save.html">Saved</a>
                            </li>
                            <li>
                              <a href="page-dashboard-message.html">Message</a>
                            </li>
                            <li>
                              <a href="page-dashboard-reviews.html">Reviews</a>
                            </li>
                            <li>
                              <a href="page-dashboard-invoice.html">Invoice</a>
                            </li>
                            <li>
                              <a href="page-dashboard-payouts.html">Payouts</a>
                            </li>
                            <li>
                              <a href="page-dashboard-statement.html">
                                Statement
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-manage-service.html">
                                Manage Service
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-add-service.html">
                                Add Services
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-manage-jobs.html">
                                Manage Jobs
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-manage-project.html">
                                Manage Project
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-create-project.html">
                                Create Project
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-profile.html">
                                My Profile
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Employee</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-employee-v1.html">Employee V1</a>
                            </li>
                            <li>
                              <a href="page-employee-v2.html">Employee V2</a>
                            </li>
                            <li>
                              <a href="page-employee-single.html">
                                Employee Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Freelancer</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-freelancer-v1.html">
                                Freelancer V1
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-v2.html">
                                Freelancer V2
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-v3.html">
                                Freelancer V3
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-list-v1.html">List V1</a>
                            </li>
                            <li>
                              <a href="page-freelancer-list-v2.html">List V2</a>
                            </li>
                            <li>
                              <a href="page-freelancer-list-v3.html">List V3</a>
                            </li>
                            <li>
                              <a href="page-freelancer-single.html">
                                Freelancer Single
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-single-v1.html">
                                Single V1
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-single-v2.html">
                                Single V2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="page-become-seller.html">
                            <span className="title">Become Seller</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Pages</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span className="title">About</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-about.html">About v1</a>
                            </li>
                            <li>
                              <a href="page-about-v2.html">About v2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Blog</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-blog-v1.html">List V1</a>
                            </li>
                            <li>
                              <a href="page-blog-v2.html">List V2</a>
                            </li>
                            <li>
                              <a href="page-blog-v3.html">List V3</a>
                            </li>
                            <li>
                              <a href="page-blog-single.html">Single</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Shop</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-shop.html">List</a>
                            </li>
                            <li>
                              <a href="page-shop-single.html">Single</a>
                            </li>
                            <li>
                              <a href="page-shop-cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="page-shop-checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="page-shop-order.html">Order</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="page-contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="page-error.html">404</a>
                        </li>
                        <li>
                          <a href="page-faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="page-help.html">Help</a>
                        </li>
                        <li>
                          <a href="page-invoice.html">Invoices</a>
                        </li>
                        <li>
                          <a href="page-login.html">Login</a>
                        </li>
                        <li>
                          <a href="page-pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="page-register.html">Register</a>
                        </li>
                        <li>
                          <a href="page-terms.html">Terms</a>
                        </li>
                        <li>
                          <a href="page-ui-element.html">UI Elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="list-item" href="page-contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <a
                    className="login-info bdrl1 pl15-lg pl30"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  <a
                    className="login-info mx15-lg mx30"
                    href="page-become-seller.html"
                  >
                    <span className="d-none d-xl-inline-block">Become a</span>
                    Seller
                  </a>
                  <a className="login-info mr15-lg mr30" href="page-login.html">
                    Sign in
                  </a>
                  <a
                    className="ud-btn btn-thm add-joining"
                    href="page-register.html"
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="categories_list_section overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="listings_category_nav_list_menu">
                <ul className="mb0 d-flex ps-0">
                  <li>
                    <a href="#">All Categories</a>
                  </li>
                  <li>
                    <a href="#">Graphics &amp; Design</a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#">Writing &amp; Translation</a>
                  </li>
                  <li>
                    <a href="#">Video &amp; Animation</a>
                  </li>
                  <li>
                    <a href="#">Music &amp; Audio</a>
                  </li>
                  <li>
                    <a href="#">Programming &amp; Tech</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Trending</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
