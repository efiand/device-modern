import loadPP from 'pineglade-pp';

const BREAKPOINT = 1240;
const BREAKPOINT_MAX = 1300;

window.pinegladePP = {
	breakpoints: [BREAKPOINT, BREAKPOINT_MAX],
	folder: 'pixelperfect'
};

loadPP();
