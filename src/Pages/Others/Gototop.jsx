import React from "react";
import { Link } from "react-router-dom";
import jQuery from 'jquery'

const Gototop = () => {
   
    const scrolltotop = () => {
        if (jQuery(".scroll-to-target").length) {
            jQuery(".scroll-to-target").on("click", function () {
                var target = jQuery(this).attr("data-target");
                jQuery("html, body").animate(
                {
                    scrollTop: jQuery(target).offset().top
                },
                1000
                );
                return false;
            });
        }
    }  

  return (
    <Link onClick={scrolltotop} className="scroll-to-target scroll-to-top">
      <i className="fa fa-angle-up"></i>
    </Link>
  );
};

export default Gototop;
