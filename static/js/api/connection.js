function showcmdlog(){console.log("%c%s%c%s","color:#0088FF","     __        _     _                            ___                     _gg\n"+"     00,      j0F   *M                        _pMM0M0f                   gM^ ^   _,\n"+"    4M0f     q0#^                            g0~                        ]0      0&\n"+"    0M0f    jFN#   j&   _0_m00p    _g#0&    N0          gqpN  ,p000g  _N0N&&  #N0NN\n"+"   p0 0&   #P 0'   NV   #0?  QM   g0~  #&  4#          Q#F `  ~^  0&   W0      M@\n"+"   0C 0#  0F 4&   j#   _0    0&  q0ppgg06  0f          0`     _pgp0%   NE     _0\n"+"  y#  40_#!  0S   0#   BF   ]0   0M~~'~~  40c         0M    q0M~'00   ]M      Q#\n"+"  06  ]00'  gM   _#   _0'   08  ]0_        #N         0     0f  p0A   B#      0\n"+" JM    0~   B^   #F   ##    M    M0N005    '00000M   B&     #NNMN0    00      0Q&\n\n ","color:#008000","                                                                   —— 清梦曦源 我的世界\n ");console.log("%c%s%c%s","color:red;background:yellow;font-size:24px","警告：","color:red;font-size:24px","请勿在此粘贴任何代码，以免被盗");}function reConnection(i){}var numConnection=1;var maxConnection=Math.ceil(Math.random()*240)+60;function autoConnection(){numConnection++;if(numConnection>maxConnection){numConnection=1;ajax("//"+window.location.host+"/bbs/GetToken.do","reConnection");}setTimeout("autoConnection()",1000);}autoConnection();showcmdlog();