function allu(){cm_edit_openDiv("附件类型","<div class='wid300 mat10 ende main_b10'>gif、jpg、png、webp、pdf、doc、docx、xls、xlsx、ppt、pptx、txt、log、zip、rar、7z、gz、bak、tar、json</div>");}function tzgr(){var gr=document.getElementById("gr");var n=gr.selectedIndex;if(n!=0){n=n+2;if(n==8){n++;}window.location.href="group.jsp?lv=0&group="+n;}}function tzgr2(){var gr=document.getElementById("gr2");var n=gr.selectedIndex;if(n!=0){n=n-2;n=n*200;window.location.href="group.jsp?lv="+n+"&group=0";}}function tzgr0(){var gr=document.getElementById("gr0");var n=gr.selectedIndex;if(n!=0){var sx="";if(n==3){n=2;sx="&sx=sx";}if(n==4){n=8;}window.location.href="group.jsp?lv=0&group="+n+sx;}}