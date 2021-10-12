import ast
import base64
from product_management.models import Cart
from rest_framework import status


class TokenMixin(object):
    ''' 
    Creating and Parsing Cart Token
    '''
    token = None
    def create_token(self, data_dict):
        if type(data_dict) == type(dict()):
            print('str(data_dict)', str(data_dict))
            token = str(data_dict).encode('ascii')
            # token = base64.b64encode(data_dict)
            print('token', token)
            self.token = token
        else:
            raise ValueError('Error: token must be python dictionary')

    def parse_token(self, token=None):
        if token is None:
            return {}

        try:
            token_decoded = base64.b64decode(token)
            token_dict = ast.literal_eval(token_decoded)
            return token_dict
        except:
            return {}


class CartTokenMixin(TokenMixin, object):
    token_param = 'cart'
    token = None

    def get_cart_from_token(self):
        request = self.request
        cart_token = request.GET.get(self.token_param)
        print('cart_token', cart_token)
        message = "ERROR: This requires a valid cart & cart token."
        cart_token = self.parse_token(cart_token)
        cart_id = cart_token.get('cart_id')

        try:
            cart = Cart.objects.get(id=cart_id)
        except:
            cart = None

        if cart is None:
            data = {
                "success": False,
                "message": message,
            }
            response_status = status.HTTP_400_BAD_REQUEST
        else:
            self.token = cart_token
            data = {
                "cart": cart.id,
                'success': True
            }
            response_status = status.HTTP_200_OK
        return (data, cart, response_status)
