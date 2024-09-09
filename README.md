# All Media Queries push to bottom

In mixins.scss we declared 5 modes basic about:

- for-lg: Large devices (desktops, less than 1200px or from 992px to 1199px)
- for-md: Medium devices (tablets, less than 992px or from 768px to 991px)
- for-sm: Small devices (landscape phones, less than 768px or 576px to 767px)
- for-xs: Extra small devices (portrait phones, less than 576px)
- for-sp: Extra small phone (portrait phones, less than 375px, exp: iPhone 5)

exp:
```
// Large devices (desktops, less than 1200px)
@mixin for-lg {
  @media (max-width: 1199.98px) {
    @content;
  }
}
```
In every scss file, we declared some responsive modes like below
```
@mixin header-lg {
  header {
    background-color: #8bc34a;
    padding: 12px 15px
  }
}
@mixin header-md {
  header {
    background-color: #8bc34a;
    padding: 10px
  }
}
```
* sm 576 - 767
* md 768 - 991
* lg 992 - 1199
  
and call it in style.scss
```  
// media queries

@include for-lg {
  @include header-lg;
}
@include for-md {
  @include header-md;
}
```
# Hope to helpful