//  ██▀▀█▀▀██▀▀▀▀▀▀▀█▀▀█            ▄▄   ▄▄
//  ██  ▀  █▄  ▀██▄ ▀ ▄█  ▄█▄█ ▄▀██ ██▀  ██▄
//  █  █ █  ▀▀  ▄█  █  █  ██ █ ▀▄██ ▀█▄▄ ██ █
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
// ─────────────────────────────────────────────────────────────────────────────
//  MSXmath 1.7.0 by Guillaume "Aoineko" Blanchard
//  under CC-BY-SA free license
// 
//  Generated: Sun Mar 17 16:23:50 2024
//  Parameters: Entries=64, Bytes=2 (16-bits), Shift=12 (Q4.12)
// ─────────────────────────────────────────────────────────────────────────────

//  Sinus table. Range [0:Pi*2[
const unsigned short g_Sinus64[] = {
	0x0000, 0x0191, 0x031F, 0x04A5, 0x061F, 0x078B, 0x08E4, 0x0A26, 
	0x0B50, 0x0C5E, 0x0D4E, 0x0E1C, 0x0EC8, 0x0F50, 0x0FB1, 0x0FEC, 
	0x1000, 0x0FEC, 0x0FB1, 0x0F50, 0x0EC8, 0x0E1C, 0x0D4E, 0x0C5E, 
	0x0B50, 0x0A26, 0x08E4, 0x078B, 0x061F, 0x04A5, 0x031F, 0x0191, 
	0x0000, 0xFE6F, 0xFCE1, 0xFB5B, 0xF9E1, 0xF875, 0xF71C, 0xF5DA, 
	0xF4B0, 0xF3A2, 0xF2B2, 0xF1E4, 0xF138, 0xF0B0, 0xF04F, 0xF014, 
	0xF000, 0xF014, 0xF04F, 0xF0B0, 0xF138, 0xF1E4, 0xF2B2, 0xF3A2, 
	0xF4B0, 0xF5DA, 0xF71C, 0xF875, 0xF9E1, 0xFB5B, 0xFCE1, 0xFE6F, 
};

//  Cosinus table. Range [0:Pi*2[
const unsigned short g_Cosinus64[] = {
	0x1000, 0x0FEC, 0x0FB1, 0x0F50, 0x0EC8, 0x0E1C, 0x0D4E, 0x0C5E, 
	0x0B50, 0x0A26, 0x08E4, 0x078B, 0x061F, 0x04A5, 0x031F, 0x0191, 
	0x0000, 0xFE6F, 0xFCE1, 0xFB5B, 0xF9E1, 0xF875, 0xF71C, 0xF5DA, 
	0xF4B0, 0xF3A2, 0xF2B2, 0xF1E4, 0xF138, 0xF0B0, 0xF04F, 0xF014, 
	0xF000, 0xF014, 0xF04F, 0xF0B0, 0xF138, 0xF1E4, 0xF2B2, 0xF3A2, 
	0xF4B0, 0xF5DA, 0xF71C, 0xF875, 0xF9E1, 0xFB5B, 0xFCE1, 0xFE6F, 
	0x0000, 0x0191, 0x031F, 0x04A5, 0x061F, 0x078B, 0x08E4, 0x0A26, 
	0x0B50, 0x0C5E, 0x0D4E, 0x0E1C, 0x0EC8, 0x0F50, 0x0FB1, 0x0FEC, 
};
