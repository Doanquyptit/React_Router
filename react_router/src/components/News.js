import React, { Component } from 'react';
import Newsitem from './Newsitem';
import dl from './dulieu.json';
class News extends Component {
    render() {
        return (
            
            <div>
                    {/* header */}
                    <header className="masthead tintuc">
                      <div className="container h-100 text-center">
                        <div className="row h-100">
                          <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                              <h1 className="mb-5">Trang danh sach tin tuc</h1>
                              <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                            </div>
                          </div>
                          <div className="col-lg-5 my-auto">
                            <div className="device-container">
                              <div className="device-mockup iphone6_plus portrait white">
                                <div className="device">
                                  <div className="screen">
                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                    {/* <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" class="img-fluid" alt="for react router"> */}
                                  </div>
                                  <div className="button">
                                    {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </header>
  {/* end_header */}
  {/* begin tintuc */}
                <div className="contener text-center" >
                  <div className="row mt-3 rong50">

                  {
                    dl.map((value,key) =>{
                      return (
                        <Newsitem key={key}
                                  tinId={value.id}
                                  anh={value.anh} 
                                  tieuDe={value.tieuDe} 
                                  trichDan={value.trichDan}> 
                        </Newsitem>
                      ) 
                    })
                  }
                  
                  </div>
                </div>
  {/* end tintuc */}
</div>
        );
    }
}

export default News;