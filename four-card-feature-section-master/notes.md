# Notes

## Challenges

- Mobile layout was broken and text was being cut off. Claude helped identify that the media query breakpoint was set to `max-width: 375px` which was too narrow — most modern phones are slightly wider (e.g. iPhone 14 is 390px), so the media query never triggered. Fixed by changing the breakpoint to `max-width: 600px`, which covers all mobile screen sizes while leaving desktop untouched. Also fixed `.desc` by setting `width: 90%` inside the media query instead of the fixed `500px` used on desktop. The extra space below the footer also disappeared as a side effect of fixing the overflow.



- Setting `min-height: 100vh` on the main container caused a vertical scrollbar to appear even when content was shorter than the screen. This happened because the footer was being added on top of the `100vh` calculation, pushing the total height beyond the viewport. Fixed by removing `min-height: 100vh` from the main container and setting it only on `body`, then adding `flex: 1` to the main container so it grows to fill the available space.



- Struggled with placement of elements — specifically centering items horizontally while keeping them aligned to the top. Had to go back and forth a lot to figure out the right approach. Initially used `align-items: center` and `justify-content: center` which centered everything both horizontally and vertically (dead center of the screen). Fixed it by switching to `justify-content: flex-start` to keep items at the top.
