function switchSection(section){
    toggleDisplaySection(section);
    if(window[section+"SectionDisplay"]){
        for(element in listSection){
            element=listSection[element];
            if(element != section){
                disableSection(element);
            }
        }
    }
}

function toggleDisplaySection(sectionName) {
    window[sectionName+"SectionDisplay"] = !window[sectionName+"SectionDisplay"];
    let closeBracket = document.getElementById('close-bracket-'+sectionName);
    let openBracket = document.getElementById('open-bracket-'+sectionName);
    let section = document.getElementById(sectionName+'-section');
    if(window[sectionName+"SectionDisplay"]){
        section.style.display = 'block';
        closeBracket.style.display = 'block';
        closeBracket.style.color = 'var(--red)'
        openBracket.innerHTML = '{';
        openBracket.style.color = 'var(--red)';
    }else{
        disableSection(sectionName);
    }
}
function disableSection(sectionName){
    let closeBracket = document.getElementById('close-bracket-'+sectionName);
    let openBracket = document.getElementById('open-bracket-'+sectionName);
    let section = document.getElementById(sectionName+'-section');
    section.style.display = 'none';
    openBracket.innerHTML = '{ ... }';
    openBracket.style.color = 'var(--grey)';
    closeBracket.style.display= 'none';
}
listSection = ['projects', 'skills','certifications'];

let projectsSectionDisplay = false;
let skillsSectionDisplay = false;

let projects = false;
let errorMessage = false;
async function displayProjects() {
    if (!errorMessage && !projects) {
        document.getElementById('loading').style.display = 'block';
        await changeLoading()
        document.getElementById('errorLoading').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
        errorMessage = true;

    } else if (errorMessage && !projects) {
        document.getElementById('projects').style.display = 'block';
        document.getElementById('errorLoading').style.display = 'none';
        projects = true;
    }
}
async function changeLoading() {
    let i = 0;
    let element = document.getElementById('loading');
    while (i < 6) {
        if (i == 0) {
            element.innerHTML = "Loading";
        }
        else if (i == 1) {
            element.innerHTML = "Loading .";
        }
        else if (i == 2) {
            element.innerHTML = "Loading ..";
        }
        else if (i == 3) {
            element.innerHTML = "Loading ...";
        }
        else if (i == 4) {
            element.innerHTML = "Loading";
        }
        else if (i == 5) {
            element.innerHTML = "L ad gg.";
            await new Promise(resolve => setTimeout(resolve, 150));
            element.innerHTML = "Loaig.";
            await new Promise(resolve => setTimeout(resolve, 120));
            element.innerHTML = "Loddaig....";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "LL";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "Loddaig....";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "LL";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "Lodd@ig....";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "4242";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "4242";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "4242";
            await new Promise(resolve => setTimeout(resolve, 50));
            element.innerHTML = "Lo@@dD11g....";
            await new Promise(resolve => setTimeout(resolve, 600));
            break
        }
        await new Promise(resolve => setTimeout(resolve, 800));
        i++;
    }
}
