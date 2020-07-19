<h1 align="center">
<br>
<a><img src="https://raw.githubusercontent.com/Mario2334/swindle/master/ide/public/images/letter-s.svg" width="200"></a>
<br>
  Swindle
<br>
</h1>
<h4 align="center">A Python Playground and Report Viewer Extension built on top of based on React and Pyodide.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/python-v3.7.4-informational" alt="Gitter">
  <a href="https://gitter.im/swindle-python/community"><img src="https://badges.gitter.im/swindle-python/community.svg"></a>
  <a href="https://saythanks.io/to/sanketm221995%40yahoo.co.in">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  
</p>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#running-extension">Running extension</a> •
</p>

![screenshot](https://raw.githubusercontent.com/Mario2334/swindle/master/ide/public/images/walkthrough.gif)

## Key Features

* Import supported pyodide on the fly
* Support for extending dev panel to tab
* Report View for Graph Representation and Custom Html
* Download Report as PDF
* Python Console right in your dev panel or tab
* Search Support For Editor
* Python available offline
* Packages available for download to disk cache [packages](https://github.com/iodide-project/pyodide/tree/master/packages)

## How To Use
Pull from master for release . To get development pull from develop branch
* Installing `npm install`
* For building `npm run build`
* Running `npm run start`

## Running extension

* Build app
* Go to chrome -> Extension -> Developer Mode ON -> Load unpacked(/repo/pkg)
* open devtools , you should be able to see the Editor

## Helpers

These Function enable let you to write html , css , add javascript and 
download data

#### Add Scripts
```$python
from js import Helpers,addHtml,add_css

addHtml("""
<div class='description'>
  <div class='count'><span class='total'></span>Total</div>
  <div class='count'><span class='conf'></span>Confirmed</div>
  <div class='count'><span class='deaths'></span>Deaths</div>
</div>
""")
addHtml("<div id='choropleth'/>")

add_css("""
.description {
  display: flex;
  padding: 15px 15px 30px;
}

.count {
  text-align: center;
  font-size: 20px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  padding: 26px;
}

.count span {
  display: block;
  font-size: 30px;
  font-weight: 100;
}
""")

Helpers.get.js("https://cdnjs.cloudflare.com/ajax/libs/d3/4.10.2/d3.js")
Helpers.get.js("https://cdn.plot.ly/plotly-latest.min.js")
Helpers.get.data("https://covid.ourworldindata.org/data/ecdc/total_cases.csv")
```

#### Get Data/Javascript

 ```
from js import Helpers
import json

Helpers.get.js("https://cdnjs.cloudflare.com/ajax/libs/d3/4.10.2/d3.js") 
Helpers.get.js("https://cdn.plot.ly/plotly-latest.min.js") 
Helpers.get.data("https://covid.ourworldindata.org/data/ecdc/total_cases.csv") 
data = json.loads(Helpers.get.json("https://get.geojs.io/v1/ip/country.json"))

```

## Examples

#### Matplotlib
```
import numpy as np
from matplotlib import pyplot as plt

x = np.linspace(0.0, 2.0 * np.pi, 100)
y = np.sin(x)
plt.plot(x,y)
plt.show()
```
#### Fetch Data and dump in table:


```
from js import output_element , Helpers , document
import json

data = json.loads(Helpers.get.json("https://get.geojs.io/v1/ip/country.json"))

table = output_element("table")

thead = table.createTHead();
row = thead.insertRow();

for key in data.keys():
    th = document.createElement("th");
    text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);

row = table.insertRow();

for key in data.keys():
    cell = row.insertCell();
    text = document.createTextNode(data[key]);
    cell.appendChild(text);
```
