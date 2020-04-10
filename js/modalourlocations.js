const btn_loc_all = document.getElementById('ourlocations_all');
const btn_loc_1 = document.getElementById('ourlocations_1');
const btn_loc_2 = document.getElementById('ourlocations_2');
const btn_loc_3 = document.getElementById('ourlocations_3');
const btn_loc_4 = document.getElementById('ourlocations_4');
const btn_loc_5 = document.getElementById('ourlocations_5');

var loc_sect = document.getElementById('ourlocations_col');

btn_loc_1.addEventListener('click', function(){
    btn_loc_all.style.display = 'initial';
    loc_sect.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.256351058275!2d-73.78797908459507!3d40.7123728793319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2611a2c7b4f0d%3A0xcf4f23ebbdcfd131!2s175-61%20Hillside%20Avenue%2C%20Jamaica%2C%20NY%2011432%2C%20USA!5e0!3m2!1sen!2sbd!4v1581532094045!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
});
btn_loc_2.addEventListener('click', function(){
    btn_loc_all.style.display = 'initial';
    loc_sect.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0393715442865!2d-73.93573128459083!3d40.84905937931729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f41fac5a606d%3A0xb3d6946dde52b547!2s1420%20St%20Nicholas%20Ave%2C%20New%20York%2C%20NY%2010033%2C%20USA!5e0!3m2!1sen!2sbd!4v1581532165713!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
});
btn_loc_3.addEventListener('click', function(){
    btn_loc_all.style.display = 'initial';
    loc_sect.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.738509248239!2d-73.85391468459129!3d40.833706979318784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4c847db10b9%3A0x9192cfb1ade213f!2s1275%20Castle%20Hill%20Ave%2C%20The%20Bronx%2C%20NY%2010462%2C%20USA!5e0!3m2!1sen!2sbd!4v1581532333679!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
});
btn_loc_4.addEventListener('click', function(){
    btn_loc_all.style.display = 'initial';
    loc_sect.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0902057767826!2d-73.7447109845929!3d40.78203097932429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2898b7a1539b9%3A0x944425b695d00723!2s27%20Laurel%20Dr%2C%20Great%20Neck%2C%20NY%2011021%2C%20USA!5e0!3m2!1sen!2sbd!4v1581532310320!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
});
btn_loc_5.addEventListener('click', function(){
    btn_loc_all.style.display = 'initial';
    loc_sect.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.585118371331!2d-73.89354478459394!3d40.74915377932782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f070454ad2b%3A0xe0fa6b1945160605!2s74-11%2037th%20Ave%2C%20Jackson%20Heights%2C%20NY%2011372%2C%20USA!5e0!3m2!1sen!2sbd!4v1581532371778!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
});
btn_loc_all.addEventListener('click', function(){
    btn_loc_all.style.display = 'none';
    loc_sect.innerHTML = `<iframe src="https://www.google.com/maps/d/embed?mid=11Wv2-SaiBQu967GPAk6MQ-HWxpic_nFA&hl=en&z=10" width="640" height="480" frameborder="0" style="border:0" allowfullscreen></iframe>`
});
