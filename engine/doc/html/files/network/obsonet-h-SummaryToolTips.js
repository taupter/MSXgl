﻿NDSummary.OnToolTipsLoaded("File:network/obsonet.h",{622:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype622\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">u8 ONET_Initialize()</div></div><div class=\"TTSummary\">ObsoNET searching routine /!\\ Must not be call from page 1 /!\\ Must not be call before any other function from this module</div></div>",643:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype643\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 ONET_GetSlot()</div></div><div class=\"TTSummary\">Obtains the ObsoNET slot (or 0xFF is not found)</div></div>",644:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype644\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> ONET_HasBIOS()</div></div><div class=\"TTSummary\">Check if ObsoNET card has a BIOS</div></div>",645:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype645\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ONET_Reset()</div></div><div class=\"TTSummary\">Initializes the ObsoNET card</div></div>",646:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype646\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline const</span> u8* ONET_GetVersion()</div></div><div class=\"TTSummary\">Obtains the BIOS version</div></div>",647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype647\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline const</span> u8* ONET_GetPhysicalAddr()</div></div><div class=\"TTSummary\">Obtains the ObsoNET physical address</div></div>",648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype648\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline const</span> u8* ONET_GetMACAddress()</div></div><div class=\"TTSummary\">Obtains the ObsoNET physical address See ONET_GetPhysicalAddr</div></div>",649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype649\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ONET_GetStatus()</div></div><div class=\"TTSummary\">Obtains the network connection status</div></div>",650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype650\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 ONET_Activation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">flag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Activates or deactivates ObsoNET</div></div>",651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype651\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> ONET_Activate()</div></div><div class=\"TTSummary\">Activates ObsoNET</div></div>",652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype652\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> ONET_Disactivate()</div></div><div class=\"TTSummary\">Deactivates ObsoNET</div></div>",653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype653\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> ONET_IsActivate()</div></div><div class=\"TTSummary\">Check Activates or deactivates ObsoNET</div></div>",654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype654\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 ONET_ReceptConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">flag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Configuration of the reception parameters</div></div>",655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype655\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> ONET_SetReceptConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">flag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set Configuration of the reception parameters</div></div>",663:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Get Configuration of the reception parameters</div></div>",664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype664\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ONET_SetMulticastMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8*&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set Configuration of the multicast mask</div></div>",666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype666\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ONET_GetMulticastMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8*&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get Configuration of the multicast mask</div></div>",676:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype676\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> ONET_GetPacketInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">struct</span>&nbsp;</td><td class=\"PType\">ONET_PacketInfo*&nbsp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Obtains information about the oldest received packet</div></div>",677:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype677\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> ONET_GetPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8*&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Obtains the oldest captured incoming packet</div></div>",678:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype678\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ONET_DiscardPacket()</div></div><div class=\"TTSummary\">Discard the oldest captured incoming packet</div></div>",679:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype679\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 ONET_SendPacketSync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u16&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sends a packet to the network (Synchronous execution)</div></div>",741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype741\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 ONET_SendPacketAsync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u16&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sends a packet to the network (Asynchronous execution)</div></div>",783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype783\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">u8 ONET_GetSendStatus()</div></div><div class=\"TTSummary\">Obtains the status of the packet transmission</div></div>"});