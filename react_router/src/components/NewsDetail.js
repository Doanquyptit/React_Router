import React, { Component } from 'react';
import dl from './dulieu.json';
import {withRouter} from "react-router-dom";
import NewsRelated from './NewsRelated';
class NewsDetail extends Component {

    render() {
      var dem=1;
        return (
            
            <div>
                  {/* header */}
                  <header className="masthead tintuc">
                    <div className="container h-100">
                      <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                          <div className="header-content mx-auto">
                            <h3 className="mb-5">{this.props.tieuDe}</h3>
                            <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                          </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                          <div className="device-container">
                            <div className="device-mockup iphone6_plus portrait white">
                              <div className="device">
                                <div className="screen">
                                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                  {/* <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" class="img-fluid" alt="react router demo"> */}
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
                {
                  dl.map((value, key) => {
                       if(value.id === parseInt(this.props.match.params.id,20)){
                          return  (
                            <div className="jumbotron jumbotron-fluid rong100" key={key} >
                            <div className="container">
                            <img src={value.anh} className="img-fluid " alt="react router demo" />
                            {/* <p className="lead">{value.tieuDe}</p> */}
                            <hr className="my-2" />
                            <p className=" text-center font-weight-bold">{value.tieuDe}</p>
                            <p>
                              {value.noiDung}
                            </p>
                          </div>
                          </div>
                          );       
                        } else return true;
                        
                      })
                }
                  <div className="container">
                      <div className="card-body">
                          <h4 className="card-title text-center">Tin lien quan</h4>                
                      </div>
                      <div className="card-deck">
                      
                      {
                        
                        dl.map((value,key) =>{
                          if(dem <=4 && parseInt(value.id,20) !== parseInt(this.props.match.params.id,20)){
                            dem++;
                         return(
                            <NewsRelated key={key}                            
                                  tinId={value.id}
                                  anh={value.anh} 
                                  tieuDe={value.tieuDe} 
                                  trichDan={value.trichDan}>
                            </NewsRelated>
                          )
                        }else return true;
                
                        })
                      }
                      </div>
                  </div>
                  {/* end tintuc */}
                </div>         
            
        );
    }
}

export default withRouter(NewsDetail);