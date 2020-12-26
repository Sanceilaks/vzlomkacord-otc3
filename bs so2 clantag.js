UI.AddDropdown( "Custom ClanTag", [ "Disabled", "blockstrik", "standoff2"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 26)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                bl"); break; }
            case 2: { Local.SetClanTag("               blo"); break; }
            case 3: { Local.SetClanTag("              bloc"); break; }
            case 4: { Local.SetClanTag("             block"); break; }
            case 5: { Local.SetClanTag("            blocks"); break; }
            case 6: { Local.SetClanTag("           blockst"); break; }
            case 7: { Local.SetClanTag("          blockstr"); break; }
            case 8: { Local.SetClanTag("         blockstri"); break; }
            case 9: { Local.SetClanTag("        blockstrik"); break; }
            case 10:{ Local.SetClanTag("       blockstrike"); break; }
            case 11:{ Local.SetClanTag("      blockstrike "); break; }
            case 12:{ Local.SetClanTag("    blockstrike   "); break; }
            case 13:{ Local.SetClanTag("   blockstrike    "); break; }
            case 14:{ Local.SetClanTag("  blockstrike     "); break; }
            case 15:{ Local.SetClanTag(" blockstrike      "); break; }
            case 16:{ Local.SetClanTag("lockstrike        "); break; }
            case 17:{ Local.SetClanTag("ockstrike         "); break; }
            case 18:{ Local.SetClanTag("ckstrike          "); break; }
            case 19:{ Local.SetClanTag("kstrike           "); break; }
            case 20:{ Local.SetClanTag("strike            "); break; }
            case 21:{ Local.SetClanTag("trike             "); break; }
            case 22:{ Local.SetClanTag("rike              "); break; }
            case 23:{ Local.SetClanTag("ike               "); break; }
            case 24:{ Local.SetClanTag("ke                "); break; }
            case 25:{ Local.SetClanTag("e                 "); break; }
            case 26:{ Local.SetClanTag("                  "); break; }
 
            }
        }
    if(tag == 2)
            {
            switch((time) % 25)
            {
                case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 s"); break; }
                case 2: { Local.SetClanTag("                st"); break; }
                case 3: { Local.SetClanTag("               sta"); break; }
                case 4: { Local.SetClanTag("              stan"); break; }
                case 5: { Local.SetClanTag("             stand"); break; }
                case 6: { Local.SetClanTag("            stando"); break; }
                case 7: { Local.SetClanTag("           standof"); break; }
                case 8: { Local.SetClanTag("          standoff"); break; }
                case 9: { Local.SetClanTag("         standoff2"); break; }
                case 10:{ Local.SetClanTag("        standoff2 "); break; }
                case 11:{ Local.SetClanTag("       standoff2  "); break; }
                case 12:{ Local.SetClanTag("      standoff2   "); break; }
                case 13:{ Local.SetClanTag("     standoff2    "); break; }
                case 14:{ Local.SetClanTag("    standoff2     "); break; }
                case 15:{ Local.SetClanTag("   standoff2      "); break; }
                case 16:{ Local.SetClanTag("  standoff2       "); break; }
                case 17:{ Local.SetClanTag(" standoff2        "); break; }
                case 18:{ Local.SetClanTag("standoff2         "); break; }
                case 19:{ Local.SetClanTag("tandoff2          "); break; }
                case 20:{ Local.SetClanTag("andoff2           "); break; }
                case 21:{ Local.SetClanTag("ndoff2            "); break; }
                case 22:{ Local.SetClanTag("doff2             "); break; }
                case 23:{ Local.SetClanTag("off2              "); break; }
                case 24:{ Local.SetClanTag("ff2               "); break; }
                case 24:{ Local.SetClanTag("f2                "); break; }
                case 24:{ Local.SetClanTag("2                 "); break; }
 
 
 
          
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");