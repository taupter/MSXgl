//  ██▀▀█▀▀██▀▀▀▀▀▀▀█▀▀█            ▄▄   ▄▄
//  ██  ▀  █▄  ▀██▄ ▀ ▄█  ▄█▄█ ▄▀██ ██▀  ██▄
//  █  █ █  ▀▀  ▄█  █  █  ██ █ ▀▄██ ▀█▄▄ ██ █
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
// ─────────────────────────────────────────────────────────────────────────────
//  MSXmath 1.7.0 by Guillaume "Aoineko" Blanchard
//  under CC-BY-SA free license
// 
//  Generated: Sun Mar 17 16:23:50 2024
//  Parameters: Entries=32, Bytes=2 (16-bits), Shift=12 (Q4.12)
// ─────────────────────────────────────────────────────────────────────────────

//  Sinus table. Range [0:Pi*2[
const unsigned short g_Sinus32[] = {
	0x0000, 0x031F, 0x061F, 0x08E4, 0x0B50, 0x0D4E, 0x0EC8, 0x0FB1, 
	0x1000, 0x0FB1, 0x0EC8, 0x0D4E, 0x0B50, 0x08E4, 0x061F, 0x031F, 
	0x0000, 0xFCE1, 0xF9E1, 0xF71C, 0xF4B0, 0xF2B2, 0xF138, 0xF04F, 
	0xF000, 0xF04F, 0xF138, 0xF2B2, 0xF4B0, 0xF71C, 0xF9E1, 0xFCE1, 
};

//  Cosinus table. Range [0:Pi*2[
const unsigned short g_Cosinus32[] = {
	0x1000, 0x0FB1, 0x0EC8, 0x0D4E, 0x0B50, 0x08E4, 0x061F, 0x031F, 
	0x0000, 0xFCE1, 0xF9E1, 0xF71C, 0xF4B0, 0xF2B2, 0xF138, 0xF04F, 
	0xF000, 0xF04F, 0xF138, 0xF2B2, 0xF4B0, 0xF71C, 0xF9E1, 0xFCE1, 
	0x0000, 0x031F, 0x061F, 0x08E4, 0x0B50, 0x0D4E, 0x0EC8, 0x0FB1, 
};
