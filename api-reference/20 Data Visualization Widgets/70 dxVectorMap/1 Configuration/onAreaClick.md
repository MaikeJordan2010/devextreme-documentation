---
dep: Use the 'onClick' option instead
EventForAction: ..\4 Events\areaClick.md
type: function | string
---
---
##### notUsedInTheme

##### deprecated
Use the [onClick](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/onClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onClick') option instead.

##### shortDescription
A handler for the [areaClick](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/areaClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#areaClick') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Area object
The clicked area.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked area. An object that represents this area has fields and methods documented in the [Area](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') class description.

Alternatively, you can navigate to a specific URL when the **areaClick** event fires. For this purpose, assign this URL to the **onAreaClick** option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>