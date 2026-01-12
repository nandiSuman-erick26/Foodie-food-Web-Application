<Box
        sx={{
          bgcolor: "#121a1d",
          backgroundImage: `url(${advertisement})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          // backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // gap: 15,
        }}
      >
        {/* {android and ios avalability} */}
        <Box
          sx={{
            width: 470,
            position: "absolute",
            left: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: 270 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: 33,
                }}
              >
                simple way to order your food
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Button sx={{ bgcolor: "#fff", height: 40, width: 150 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {/* 1. Define the Gradient */}
                    <svg width="0" height="0">
                      <linearGradient
                        id="google-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="2%" stopColor="#4285F4" /> {/* Blue */}
                        <stop offset="35%" stopColor="#EA4335" /> {/* Red */}
                        <stop offset="62%" stopColor="#FBBC05" /> {/* Yellow */}
                        <stop offset="100%" stopColor="#34A853" /> {/* Green */}
                      </linearGradient>
                    </svg>

                    {/* 2. Use the Gradient ID in the Icon */}
                    <Play
                      size={28}
                      style={{ fill: "url(#google-gradient)", stroke: "none" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#000", fontSize: 10 }}>
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: 800,
                        textTransform: "capitalize",
                      }}
                    >
                      google play
                    </Typography>
                  </Box>
                </Box>
              </Button>
              <Button sx={{ bgcolor: "#fff", height: 40, width: 150 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <AppleIcon fill="#000" color="#000" />
                    <Box
                      sx={{
                        bgcolor: "#ffffffff",
                        borderRadius: 99,
                        height: 10,
                        width: 10,
                        position: "relative",
                        right: 8,
                        bottom: -8,
                      }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#000", fontSize: 10 }}>
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: 800,
                        textTransform: "capitalize",
                      }}
                    >
                      apple store
                    </Typography>
                  </Box>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ position: "relative", top: -10, right: -280 }}>
            <FoodOrderCard width={250} height={500} />
          </Box>
          <Box sx={{ position: "relative", top: 25, right: -300 }}>
            <BurgerCard width={250} height={500} />
          </Box>
        </Box>
      </Box>