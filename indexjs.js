const botonReset = document.getElementById("reset")
const botonHome = document.getElementById("home")
const seccionPrincipal = document.getElementById("clases-perros")
const seccionPastor = document.getElementById("seccion-pastor")
const seccionbeagle = document.getElementById("seccion-beagle")
const secciongolden = document.getElementById("seccion-golden")
const seccionpoodle = document.getElementById("seccion-poodle")
const seccionBulldog = document.getElementById("seccion-Bulldog")
const seccionterrier = document.getElementById("seccion-terrier")
const seccionChihuahua = document.getElementById("seccion-Chihuahua")
const seccionsiberiano = document.getElementById("seccion-siberiano")
const seccionBoxer = document.getElementById("seccion-Boxer")
const seccionDalmata = document.getElementById("seccion-Dalmata")
const seccionRottweiler = document.getElementById("seccion-Rottweiler")
const seccionCollie = document.getElementById("seccion-Collie")
const seccionMestizo = document.getElementById("seccion-Mestizo")
const seccionSamoyedo = document.getElementById("seccion-Samoyedo")
const seccionPug = document.getElementById("seccion-Pug")
const seccionShih = document.getElementById("seccion-Shih")

const pastorImg = document.getElementById("pastor-aleman")
const pastorButton = document.getElementById("pastor-aleman-uno")
const beagleImg = document.getElementById("beagle")
const beagleButton = document.getElementById("beagle-uno")
const goldeneImg = document.getElementById("golden")
const goldenButton = document.getElementById("golden-uno")
const poodleeImg = document.getElementById("poodle")
const poodleButton = document.getElementById("poodle-uno")
const BulldogImg = document.getElementById("Bulldog")
const BulldogButton = document.getElementById("Bulldog-uno")
const terrierImg = document.getElementById("terrier")
const terrierButton = document.getElementById("terrier-uno")
const ChihuahuaImg = document.getElementById("Chihuahua")
const ChihuahuaButton = document.getElementById("Chihuahua-uno")
const siberianoImg = document.getElementById("siberiano")
const siberianoButton = document.getElementById("siberiano-uno")
const BoxerImg = document.getElementById("Boxer")
const BoxerButton = document.getElementById("Boxer-uno")
const DalmataImg = document.getElementById("Dalmata")
const DalmataButton = document.getElementById("Dalmata-uno")
const RottweilerImg = document.getElementById("Rottweiler")
const RottweilerButton = document.getElementById("Rottweiler-uno")
const CollieImg = document.getElementById("Collie")
const CollieButton = document.getElementById("Collie-uno")
const MestizoImg = document.getElementById("Mestizo")
const MestizoButton = document.getElementById("Mestizo-uno")
const SamoyedoImg = document.getElementById("Samoyedo")
const SamoyedoButton = document.getElementById("Samoyedo-uno")
const PugImg = document.getElementById("Pug")
const PugButton = document.getElementById("Pug-uno")
const ShihImg = document.getElementById("Shih")
const ShihButton = document.getElementById("Shih-uno")

seccionPastor.style.display = "none"
seccionbeagle.style.display = "none"
secciongolden.style.display = "none"
seccionpoodle.style.display = "none"
seccionBulldog.style.display = "none"
seccionterrier.style.display = "none"
seccionChihuahua.style.display = "none"
seccionsiberiano.style.display = "none"
seccionBoxer.style.display = "none"
seccionDalmata.style.display = "none"
seccionRottweiler.style.display = "none"
seccionCollie.style.display = "none"
seccionMestizo.style.display = "none"
seccionSamoyedo.style.display = "none"
seccionPug.style.display = "none"
seccionShih.style.display = "none"

pastorImg.addEventListener("click", pastor)
pastorButton.addEventListener("click", pastor)
function pastor(){
    seccionPastor.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

beagleImg.addEventListener("click", beagle)
beagleButton.addEventListener("click", beagle)
function beagle(){
    seccionbeagle.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

goldeneImg.addEventListener("click", golden)
goldenButton.addEventListener("click", golden)
function golden(){
    secciongolden.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

poodleeImg.addEventListener("click", poodlee)
poodleButton.addEventListener("click", poodlee)
function poodlee(){
    seccionpoodle.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

BulldogImg.addEventListener("click", bulldog)
BulldogButton.addEventListener("click", bulldog)
function bulldog(){
    seccionBulldog.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

terrierImg.addEventListener("click", terrier)
terrierButton.addEventListener("click", terrier)
function terrier(){
    seccionterrier.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

ChihuahuaImg.addEventListener("click", chihuahua)
ChihuahuaButton.addEventListener("click", chihuahua)
function chihuahua(){
    seccionChihuahua.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

siberianoImg.addEventListener("click", siberiano)
siberianoButton.addEventListener("click", siberiano)
function siberiano(){
    seccionsiberiano.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

BoxerImg.addEventListener("click", boxer)
BoxerButton.addEventListener("click", boxer)
function boxer(){
    seccionBoxer.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

DalmataImg.addEventListener("click", dalmata)
DalmataButton.addEventListener("click", dalmata)
function dalmata(){
    seccionDalmata.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

RottweilerImg.addEventListener("click", rottweilwer)
RottweilerButton.addEventListener("click", rottweilwer)
function rottweilwer(){
    seccionRottweiler.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

CollieImg.addEventListener("click", collie)
CollieButton.addEventListener("click", collie)
function collie(){
    seccionCollie.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

MestizoImg.addEventListener("click", mestizo)
MestizoButton.addEventListener("click", mestizo)
function mestizo(){
    seccionMestizo.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

SamoyedoImg.addEventListener("click", samoyedo)
SamoyedoButton.addEventListener("click", samoyedo)
function samoyedo(){
    seccionSamoyedo.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

PugImg.addEventListener("click", pug)
PugButton.addEventListener("click", pug)
function pug(){
    seccionPug.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

ShihImg.addEventListener("click", shih)
ShihButton.addEventListener("click", shih)
function shih(){
    seccionShih.style.display = "flex"
    seccionPrincipal.style.display = "none"
}

botonReset.addEventListener("click", reset)
function reset(){
    location.reload()
}

botonHome.addEventListener("click", home)
function home(){
    seccionPastor.style.display = "none"
    seccionbeagle.style.display = "none"
    secciongolden.style.display = "none"
    seccionpoodle.style.display = "none"
    seccionBulldog.style.display = "none"
    seccionterrier.style.display = "none"
    seccionChihuahua.style.display = "none"
    seccionsiberiano.style.display = "none"
    seccionBoxer.style.display = "none"
    seccionDalmata.style.display = "none"
    seccionRottweiler.style.display = "none"
    seccionCollie.style.display = "none"
    seccionMestizo.style.display = "none"
    seccionSamoyedo.style.display = "none"
    seccionPug.style.display = "none"
    seccionShih.style.display = "none"
    seccionPrincipal.style.display = "flex"
}