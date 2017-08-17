var feature = document.getElementById('feature_toggle');
var spec = document.getElementById('spec_toggle');
var specDiv = document.getElementById('spec_expand');
var featureDiv = document.getElementById('feature_expand');

feature.onclick = function() {
    if (featureDiv.style.display !== 'none') {
        featureDiv.style.display = 'none';
        specDiv.style.display = 'block';
    }
    else {
        featureDiv.style.display = 'block';
        feature.style.background = '#6E7476'
        spec.style.background = '#AAB3B6'
        specDiv.style.display = 'none';
    }
};

spec.onclick = function() {
    if (specDiv.style.display !== 'none') {
        specDiv.style.display = 'none';
        featureDiv.style.display = 'block';
    }
    else {
        specDiv.style.display = 'block';
        spec.style.background = '#6E7476'
        feature.style.background = '#AAB3B6'
        featureDiv.style.display = 'none';
    }
};