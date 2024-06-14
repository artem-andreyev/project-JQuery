### Project for JQuery usage, testing its functionality and possibilities.
For example image animation:

```javascript
    $(".list-item:eq(4)").on("click", function() {
        $(".image:odd").animate({
            opacity: "toggle",
            height: "toggle",
        }, 2000);
    });
});
```
