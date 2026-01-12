import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import CommonHeader from "../components/CommonHeader";
import { CartContext } from "../hooks/context/cart/Cart.create";
import { useContext } from "react";
import type { CartItem } from "../typescript/interface/cart.interface";
import { toast } from "sonner";
import {
  Handbag,
  Minus,
  Plus,
  ReceiptIndianRupee,
  SendHorizonal,
  ShoppingBasket,
  Trash2,
  Truck,
  X,
} from "lucide-react";

const AddtoCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Your component must be wrapped with <FormProvider>");
  }

  const {
    cartState,
    removeItem,
    emptyCart,
    increaseQuantity,
    decreaseQuantity,
  } = context;

  console.log("=====cartState======", cartState);

  const handleProductDelete = (data: CartItem) => {
    removeItem(data);
    toast.success("Item removed!");
  };
  const handleEmptyCart = () => {
    emptyCart();
    toast.warning("Your cart is now empty!");
  };
  const handleProceedPay = () => {
    toast.warning(
      "This window is under-development! Sorry for the inconvenience!"
    );
  };

  // const totalPrice = cartState?.cart.reduce(
  //   (acc, item) => acc + item.total_price,
  //   0
  // );
  return (
    <Box>
      <CommonHeader />
      <Box
        sx={{
          bgcolor: "#0e1416ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 6 },
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            maxWidth: 1400,
            padding: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%", lg: "65%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minHeight: { md: "80vh" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: { xs: "auto", md: "60vh" },
                maxHeight: { xs: "60vh", md: "none" },
                overflowY: "auto",
                "&::-webkit-scrollbar": { width: "5px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ffffff10",
                  borderRadius: "10px",
                },
                padding: { xs: 2, sm: 3 },
                borderRadius: 5,
                width: "100%",
                alignItems: "center",
                boxShadow: "inset 1px 2px 10px #032932ff",
              }}
            >
              {cartState?.cart.length === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 8,
                    gap: 2,
                  }}
                >
                  <ShoppingBasket color="#ffffff30" size={80} />
                  <Typography
                    sx={{
                      color: "#ffffff50",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Your cart is empty
                  </Typography>
                </Box>
              ) : (
                cartState?.cart?.map((item) => (
                  <Box
                    key={item?.product_id}
                    sx={{
                      bgcolor: "#2226288d",
                      borderRadius: 2,
                      px: { xs: 2, sm: 4 },
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      width: { xs: "95%", sm: "100%", md: "90%" },
                      ":hover": {
                        border: "1px solid #d68240",
                      },
                      position: "relative",
                      py: 2,
                      gap: { xs: 2, sm: 3 },
                      alignItems: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    {/* Product Image */}
                    <Box>
                      <Avatar
                        src={item?.product_image}
                        alt="product"
                        sx={{
                          height: { xs: 80, sm: 100 },
                          width: { xs: 100, sm: 120 },
                          borderRadius: 1,
                        }}
                        variant="rounded"
                      />
                    </Box>
                    {/* Product detail with increase decrease button */}
                    <Box
                      sx={{
                        width: "100%",
                        textAlign: { xs: "center", sm: "left" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          justifyContent: "space-between",
                          width: "100%",
                          alignItems: { xs: "center", sm: "flex-start" },
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: { xs: 14, md: 16 },
                            fontWeight: 600,
                            textTransform: "uppercase",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item?.product_name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#d68140b9",
                            fontSize: 18,
                          }}
                        >
                          <span style={{ fontSize: 16 }}>Rs</span>{" "}
                          {item?.product_price}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: { xs: "center", sm: "flex-start" },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#707070ff",
                            fontSize: 12,
                            maxWidth: 300,
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cupiditate officiis.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 60,
                          height: 25,
                          bgcolor: "#20373fff",
                          borderRadius: 1,
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          mt: 1,
                          mx: { xs: "auto", sm: 0 },
                        }}
                      >
                        <Box
                          component="button"
                          sx={{
                            bgcolor: "transparent",
                            border: "none",
                            display: item?.product_qty === 1 ? "none" : "block",
                          }}
                          onClick={() => decreaseQuantity(item)}
                        >
                          <Minus size={16} color="#edededff" />
                        </Box>
                        <Box component="p" sx={{ color: "#fff" }}>
                          {item?.product_qty}
                        </Box>
                        <Box
                          component="button"
                          sx={{
                            bgcolor: "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => increaseQuantity(item)}
                        >
                          <Plus size={16} color="#edededff" />
                        </Box>
                      </Box>
                    </Box>
                    {/* {delete button} */}
                    <Box
                      onClick={() => handleProductDelete(item)}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "transform 0.2s",
                        ":hover": { transform: "scale(1.2)" },
                        position: "absolute",
                        left: 8,
                        top: 8,
                        border: "1px solid #d68240",
                        borderRadius: 50,
                        p: "1px",
                      }}
                    >
                      <X size={12} color="#d68240" />
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "40%", lg: "35%" },
              maxWidth: 500,
              minHeight: { md: "80vh" },
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "#6afc5c29",
                borderRadius: 5,
                border: "1px solid #0c8b00f1",
                width: "100%",
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 16,
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                order summary
              </Typography>
              {cartState?.cart_length === 0 ? (
                <Typography
                  sx={{
                    color: "#a3a3a3ff",
                    fontSize: 10,
                    textTransform: "capitalize",
                  }}
                >
                  * Add item to generate summary
                </Typography>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#ff0000ff",
                      color: "#fff",
                      width: 20,
                      height: 40,
                      borderRadius: 3,
                    }}
                    onClick={handleEmptyCart}
                  >
                    <Trash2 size={16} />
                  </Button>
                  <Button
                    sx={{
                      bgcolor: "#00bd10ff",
                      color: "#fff",
                      width: 100,
                      height: 40,
                      borderRadius: 3,
                    }}
                    onClick={handleProceedPay}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        marginRight: 2,
                        padding: 1,
                      }}
                    >
                      Pay {cartState?.cart_total_price}
                    </span>
                    <SendHorizonal size={16} />
                  </Button>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                borderRadius: 5,
                flexDirection: "column",
                gap: 2,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#fac17147",
                    borderRadius: 5,
                    border: "1px solid #c36903ff",
                    width: "70%",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ff9500ff",
                      fontSize: 11,
                      textTransform: "capitalize",
                      textAlign: "center",
                      p: "1px",
                    }}
                  >
                    Food deliver in{" "}
                    <span style={{ fontWeight: 600, color: "#0df92cff" }}>
                      * 30 mins
                    </span>
                  </Typography>
                </Box>
                {cartState?.cart_length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      gap: 1,
                      // border: "1px solid",
                      width: "90%",
                      py: 3,
                      borderRadius: 2,
                      p: 1,
                      overflowY: "auto",
                      "&::-webkit-scrollbar": { width: "2px" },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#ffa200ff",
                        borderRadius: "10px",
                      },
                      height: "120px",
                    }}
                  >
                    {cartState?.cart?.map((i) => (
                      <Grid
                        container
                        spacing={2}
                        key={i?.product_id}
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          // border:"1px solid red"
                        }}
                      >
                        <Grid size={2}>
                          <Avatar
                            src={i?.product_image}
                            sx={{
                              height: 25,
                              width: 25,
                              borderRadius: 2,
                              // flexShrink: 0,
                            }}
                          />
                        </Grid>
                        <Grid size={6}>
                          <Typography
                            sx={{
                              fontSize: 13,
                              textAlign: "left",
                              color: "#d68240",
                            }}
                          >
                            {i?.product_name}
                          </Typography>
                        </Grid>
                        <Grid size={2}>
                          <Typography sx={{ fontSize: 12, color: "#a3a2a2ff" }}>
                            x {i?.product_qty}
                          </Typography>
                        </Grid>
                        <Grid size={2}>
                          <Typography
                            sx={{
                              textAlign: "right",
                              fontWeight: 600,
                              fontSize: 13,
                              color: "#fff",
                            }}
                          >
                            {i?.total_price}
                            <span style={{ fontSize: 9 }}>.00</span>
                          </Typography>
                        </Grid>
                      </Grid>
                      // </Box>
                    ))}
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    width: "90%",
                    flexDirection: "column",
                    border: "2px solid #418b04ff",
                    mt: 2,
                    px: 3, // Increased padding for better look
                    gap: 1.5,
                    bgcolor: "#9ff8561b",
                    borderRadius: 5,
                    p: 2,
                    boxShadow: "inset 0 1px 14px #285604f2",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Grid size={6}>
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Handbag size={16} color="#06c70aff" />
                        <span
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            color: "#06c70aff",
                            fontWeight: 600,
                          }}
                        >
                          Subtotal
                        </span>
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Typography
                        sx={{
                          fontSize: 20,
                          textAlign: "right",
                          fontWeight: 600,
                          color: "#cbcbcbff",
                        }}
                      >
                        {cartState?.cart_total_price}
                        <span style={{ fontSize: 14 }}>.00</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Grid size={6}>
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Truck size={16} color="#e0500eff" />
                        <span
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            color: "#e0500eff",
                            fontWeight: 600,
                          }}
                        >
                          Shipping
                        </span>
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Typography
                        sx={{
                          fontSize: 20,
                          textAlign: "right",
                          fontWeight: 600,
                          color: "#cbcbcbff",
                        }}
                      >
                        0<span style={{ fontSize: 14 }}>.00</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Grid size={6}>
                      <Typography
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <ReceiptIndianRupee size={16} color="#9a0cb7ff" />
                        <span
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            color: "#9a0cb7ff",
                            fontWeight: 600,
                          }}
                        >
                          Tax
                        </span>
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Typography
                        sx={{
                          fontSize: 20,
                          textAlign: "right",
                          fontWeight: 600,
                          color: "#cbcbcbff",
                        }}
                      >
                        0<span style={{ fontSize: 14 }}>.00</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "90%",
                    flexDirection: "row",
                    mt: 2,
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="input"
                    placeholder="**Apply Coupon**"
                    sx={{
                      bgcolor: "#9ff8560b",
                      height: 30,
                      width: "70%",
                      borderRadius: 2,
                      border: "1px solid #418b04ff",
                      boxShadow: "inset 0 1px 4px #285604f2",
                      p: 1,
                      ":focus-within": { color: "#fff" },
                    }}
                  ></Box>
                  <Box
                    component="button"
                    sx={{
                      bgcolor: "#c6790eff",
                      height: 40,
                      width: "30%",
                      borderRadius: 2,
                      border: "none",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                      ":hover": { boxShadow: "0 1px 10px #ffa200f2" },
                    }}
                  >
                    Apply
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography>You might also like</Typography>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddtoCart;
