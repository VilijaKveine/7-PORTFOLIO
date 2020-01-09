"use strict";

function renderAchievements( data ) {
    const maxBlocks = 4;
    let createdBlocks = 0;
    let HTML = '';

    if (!Array.isArray(data) ) {
        return console.error('ERROR: blogo formato duomenys');

    }
    if ( data.length === 0 ) {
        return console.error( 'ERROR: tuscias sarasas');
    }
    //sugeneruoajme HTML
    for ( let i=0; i<data.length; i++ ) {
        if ( createdBlocks === maxBlocks ) {
            break;
        }

        const block = data[i];

        //tikrinu ar tai objektas
        if ( typeof(block) !== 'object' ||
             block === null ||
             Array.isArray(block) )  {
                 continue;
             }

        if ( (block.icon || (typeof(block.icon) === 'string' && block.icon.length > 0)) &&
            (block.number || block.number > 0) &&
            (block.title || (typeof(block.title) === 'string' && block.title.length > 0)) ) {
            HTML += `<div class="col-3 col-sm-6 col-xs-12 block">
                        <i class="fa fa-${block.icon}"></i>
                        <span>${block.number}</span>
                        <h4>${block.title}</h4>
                    </div>`;
                
                createdBlocks++;
        }

    }

    //istatome HTML i reikiama vieta
    if ( createdBlocks === 0 ) {
        document.querySelector('#achievements').remove();    
    } else {
        document.querySelector('#achievements>.row').innerHTML = HTML;
    }
    
    return;
}

function renderSkills( data ) {
    let HTML = '';

    if  (!Array.isArray(data) ) {
        return console.error('ERROR: blogo formato duomenys "Skills" sekcijos sugeneravimui');
    }
    if (data.length === 0 ) {
        return console.error('ERROR: tuscias sarasas, "Skills" sekcijos sugeneravimui.');
    }

    for ( let i=0; i<data.length; i++ ) {
        const skill = data[i];
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="title">${skill.title}</div>
                        <div class="value">${skill.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="value" style="width: ${skill.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }
    
    document.querySelector('#skills_progress_bars').innerHTML = HTML;

    return;
}