# SONP

****************************************************************
     
     SONP - Smooth ONePage Scroll - Simple JS based on JQuery

     - Section sizes
     - Smooth scroll
     - Sections navigation
     - Parallax effect
     - One simple JS file (no more)
     
 ******************************************************************
 
###### Classes

- no-scroll 
  > remove scrollbar

- sonp-section 
  > define element as section

- sonp-small 
  > define section size in 200px

- sonp-middle 
  > define section size in 50%

- sonp-full 
  > define section size in 100%

- sonp-parallax
  > define parallax effect


****************************************************************


###### Example

``` HTML
<!doctype html>
<html>
    <head>
        <script src="jquery..."></script>
        <script src="sonpScroll.js"></script>
    </head>
    
    <body class="no-scroll">
        <div class="sonp-section sonp-middle">
            <p>Section middle size (50%)</p>
        </div>
        
        <div class="sonp-section sonp-full sonp-parallax">
            <p>Section full size (100%) with parallax effect</p>
        </div>
        
        <div class="sonp-section sonp-small">
            <p>Section small size (200px)</p>
        </div>
    </body>
</html>
```
