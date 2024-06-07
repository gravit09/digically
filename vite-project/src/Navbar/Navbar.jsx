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
                  <div className="col-lg-8 d-none d-xl-flex align-items-center ">
                    <div className="search_area dashboard-style">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="What service are you looking for today?"
                      />
                      <label>
                        <span className="flaticon-loupe" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-end">
                <ul
                  id="respMenu"
                  className="ace-responsive-menu"
                  data-menu-style="horizontal"
                >
                  <li className="visible_list">
                    <a className="list-item" href="#">
                      <span className="title">Users</span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <span className="title">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-become-seller.html">
                          <span className="title">Become Seller</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="list-item" href="page-contact.html">
                      Contact
                    </a>
                  </li>
                </ul>

                <Link className="login-info mr15-lg mr30" to="/signin">
                  Sign in
                </Link>
                <Link className="ud-btn btn-thm add-joining" to="/signup">
                  Join
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="categories_list_section overflow-hidden d-none d-lg-flex">
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
